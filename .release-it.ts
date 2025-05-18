export default {
  plugins: {
    'release-it-pnpm': {
      publishCommand: `pnpm publish --access public --no-git-checks --tag $tag`,
    },
  },
  git: {
    requireCommits: true,
    requireCommitsFail: false,
  },
  github: {
    release: true,
  },
  npm: {
    publish: true,
  },
}
