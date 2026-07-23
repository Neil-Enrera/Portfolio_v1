# Skill. Quality Gate

## Goal
Self-check the prompt starter before printing or saving it.

## Checklist
- Correct mode was applied (`create` or `update`)
- In create mode, discovery questions were asked first when critical inputs were missing
- Discovery covered project name, goal, role, target builder, structure and format, style and tone, and constraints
- Framework, CSS framework, and database were requested when the target builder was a coding environment
- Output is one Markdown document with one YAML code block
- YAML keys are in the required order
- Multi-line fields use YAML block scalars
- Optional technical choices that remain unknown are marked `Not specified`
- `ready_to_paste_prompt` is present and consistent with the collected answers
- In update mode, the next version file was created and no existing file was overwritten
- Document Control version uses semantic version format (`MAJOR.MINOR.PATCH`)

## Output
Do not print the checklist.
Fix the prompt starter silently if needed.
