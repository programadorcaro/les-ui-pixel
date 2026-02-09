# Changesets

This directory holds **changesets** used to update the changelog and bump versions. Only the **`@les-ui/pixel`** package is versioned; the landing app (`@repo/landing`) is ignored (see `config.json`).

## How to create a new changeset

Work on a **feature branch** (do not commit directly to `main` or `develop`). After changing code, run:

```bash
pnpm changeset
```

You will be prompted to:

1. **Select which packages were changed** — only `@les-ui/pixel` is versioned; other packages are ignored.
2. **Choose the version type**: patch, minor, or major.
3. **Write a brief description** of the changes in the generated file.

Commit the new file under `.changeset/` together with your code changes and open a Pull Request from your branch into `develop` (the default branch).

## How to publish a new release

Releases are typically run by maintainers (e.g. after promoting `develop` to `main`):

1. Ensure all changesets for the release are merged.
2. From the release branch (e.g. `main`), run:

```bash
# Bump package versions and update CHANGELOG.md
pnpm version-packages

# Build and publish @les-ui/pixel to npm
pnpm release
```

## Version types

| Type      | Use case                         | Example       |
| --------- | -------------------------------- | ------------- |
| **patch** | Bug fixes, small corrections     | 1.0.0 → 1.0.1 |
| **minor** | New backward-compatible features | 1.0.0 → 1.1.0 |
| **major** | Breaking changes                 | 1.0.0 → 2.0.0 |
