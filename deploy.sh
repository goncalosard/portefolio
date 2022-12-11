#!/usr/bin/env sh

set -e

# build
npm run build

# navigate into the build output directory
cd dist

# if you are deploying to a custom domain
# echo 'simpledataengineer.com' > CNAME

git init
git add -A
git commit -m 'New deployment'

# if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:goncalosard/portefolio.git master:gh-pages

cd -