nx affected:build --all --production && \
npm run lerna -- publish from-package --contents dist -y
