const getBranchLatestCommitDate = () =>
  fetch("https://api.github.com/repos/payamyek/portfolio-site/branches/main")
    .then((data) => data.json())
    .then((data) => data.commit.commit.author.date);

export { getBranchLatestCommitDate };
