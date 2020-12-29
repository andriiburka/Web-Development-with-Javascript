cd
cd WebstormProjects/education-javascript
git config --global user.email "andriiburka@gmail.com"
git add .
# shellcheck disable=SC2162
read msg
git commit -m "$msg"
git push -u origin master
cd