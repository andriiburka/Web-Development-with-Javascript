# shellcheck disable=SC2164
cd
cd WebstormProjects/education-javascript
git add .
# shellcheck disable=SC2162
read msg
git commit -m "$msg"
git push -u origin master
cd
