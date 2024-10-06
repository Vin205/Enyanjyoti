# Contributing Guidelines [![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/Vin205/Enyanjyoti/issues)

🚀 **Welcome to Enyanjyoti!** Thank you for considering contributing to this project. Please take a moment to review the guidelines below to help streamline the process.

When contributing to this repository, please first discuss the change you wish to make via an [issue](https://github.com/Vin205/Enyanjyoti/issues).

📚 **Make sure to read our [Wiki](https://github.com/Vin205/Enyanjyoti/wiki)** and familiarize yourself with the repository’s structure and objectives before making any contributions.

❌ **Do not open issues for general support questions** — we want to keep GitHub issues focused on bug reports and feature requests. If you have any questions, feel free to email us via our [mailing list](mailto:someone@example.com) or join our real-time discussion on [Gitter](https://gitter.im/Vin205/Enyanjyoti).

**Please remember**: This is an inclusive community. We are committed to fostering a safe and positive environment. Be sure to follow our [Code of Conduct](https://github.com/Vin205/Enyanjyoti/blob/main/CODE_OF_CONDUCT.md) in all interactions.

---

## 🐛 Submitting or Requesting an Issue/Enhancement

### 📝 **Best Practices for Reporting Issues or Requesting Enhancements**:
- 🔍 **Search First**: Before submitting, please search the issue tracker to avoid duplicates.
- 📝 **Use the Issue Template**: Always follow the issue template provided.
- 📸 **Screenshots**: Include them for UI-related issues.
- 🖼️ **Mockups**: Provide mockups when suggesting UI or workflow enhancements.

### ⚡ **Getting Assigned to Work on an Issue**:
- 🚀 **Express Your Interest**: Comment on the issue to request assignment.
- ✅ **Reproduce the Issue**: Ensure you can reproduce the problem before starting.
- 🚫 **Don’t Work on Already Assigned Issues**: Allow the assigned contributor 2 days to make progress before stepping in. If no progress is made, feel free to claim it.
⚠️ Note: Avoid working on an issue already assigned to another contributor. Allow the assigned person at least 2 days to work on the issue. If no progress is made, feel free to ask for an update.
---

## 🚀 Submitting a Pull Request (PR)

### 🛠️ **Best Practices**:
1. **Fork the Project**:
   ```
   git clone https://github.com/your-username/Enyanjyoti.git
   ```
2. **Switch to the `master` branch**:
   ```
   git checkout master
   ```
3. **Create a New Branch** with a meaningful name:
   ```
   git checkout -b branch-name
   ```
4. **Add specific files** (avoid `git add .`):
   ```
   git add file-name
   ```
5. **Write meaningful commit messages** (see [Commit Message Guidelines](COMMIT_MESSAGE.md)):
   ```
   git commit
   ```
6. **Squash commits** if needed:
   ```
   git rebase --interactive HEAD~2
   ```
7. **Push your branch**:
   ```
   git push origin branch-name
   ```
8. **Submit the PR**: Follow the PR template and ensure you provide clear context for your changes.

9. **During review**: If requested to make changes, rebase and squash your commits before pushing the changes.

**Note**: Do not create multiple PRs for the same issue. Avoid duplicating effort. Be patient if others are working on the same issue.

---

## 🌐 Configuring Remotes

Keep track of the original repository by adding an upstream remote:

1. **Set `upstream`**:
   ```
   git remote add upstream https://github.com/Vin205/Enyanjyoti.git
   ```
2. **Verify remotes**:
   ```
   git remote -v
   ```
3. **Sync changes with `upstream`**:
   ```
   git fetch upstream
   git checkout master
   git merge upstream/master
   git push origin master
   ```

---

## 🔄 After Your Pull Request is Merged

1. **Delete remote branch**:
   ```
   git push origin --delete branch-name
   ```
2. **Switch to `master`**:
   ```
   git checkout master
   ```
3. **Delete local branch**:
   ```
   git branch -D branch-name
   ```
4. **Pull the latest changes**:
   ```
   git pull upstream master
   ```

---

## ⚡ Skipping Travis CI Builds

If a build is not required (e.g., for documentation updates), include `[ci skip]` or `[skip ci]` in your commit message to skip Travis CI.

---

That’s it! Thank you for your contribution to the Enyanjyoti project! 😊  
For more information, see our [Code of Conduct](https://github.com/Vin205/Enyanjyoti/blob/main/CODE_OF_CONDUCT.md), [License](https://github.com/Vin205/Enyanjyoti/blob/main/LICENSE), and [README](https://github.com/Vin205/Enyanjyoti/blob/main/README.md).
