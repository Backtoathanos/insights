#!/usr/bin/env bash
#
# Production deploy script (Hostinger / Laravel).
# Run from repo root, e.g. after SSH:  bash scripts/deploy.sh
#
set -euo pipefail

APP_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$APP_ROOT"

PHP_BIN="${PHP_BIN:-php}"
COMPOSER_BIN="${COMPOSER_BIN:-composer}"
GIT_BRANCH="${GIT_BRANCH:-main}"

if ! command -v "$COMPOSER_BIN" >/dev/null 2>&1; then
  if [[ -f "${HOME}/composer.phar" ]]; then
    COMPOSER_BIN="${PHP_BIN} ${HOME}/composer.phar"
  else
    echo "composer not found. Install it or set COMPOSER_BIN."
    exit 1
  fi
fi

echo "==> Deploying ${APP_ROOT} (branch: ${GIT_BRANCH})"

echo "==> Fetch latest code"
git fetch origin "${GIT_BRANCH}"
git checkout "${GIT_BRANCH}"
git reset --hard "origin/${GIT_BRANCH}"

echo "==> Composer (production)"
# shellcheck disable=SC2086
$COMPOSER_BIN install --no-dev --prefer-dist --optimize-autoloader --no-interaction

echo "==> Laravel optimize"
$PHP_BIN artisan migrate --force --no-interaction
$PHP_BIN artisan config:cache
$PHP_BIN artisan route:cache
$PHP_BIN artisan view:cache

if $PHP_BIN artisan list --raw 2>/dev/null | grep -q '^event:cache$'; then
  $PHP_BIN artisan event:cache
fi

echo "==> Permissions (storage + bootstrap/cache)"
chmod -R ug+rwx storage bootstrap/cache 2>/dev/null || true

echo "==> Deploy finished successfully"
