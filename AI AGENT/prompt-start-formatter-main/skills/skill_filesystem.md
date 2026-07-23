# Skill. Filesystem and Versioning

## Goal
Save prompt starter docs in a predictable location with safe versioning.

## Rules
- Target directory: `docs/prompts/{{project_slug}}`
- Base file is v1:
  - `PROMPT-STARTER-{project_name}.md`
- Versioned files use `.vN` before `.md`
- Detect the highest existing version and write `vN+1`
- Keep `Document Control -> Version` in semantic version format (`MAJOR.MINOR.PATCH`)
- For every content update request, write the next version file and preserve previous versions
- Never overwrite existing docs unless explicitly requested

## Output
Persist the file to disk and report the saved path.
