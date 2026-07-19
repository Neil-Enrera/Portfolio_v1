# Prompt Start Formatter Agent Skills

This agent interviews the user about the product or project they want to build and produces:
- `docs/prompts/<project-slug>/PROMPT-STARTER-{project_name}.md`

The agent always:
1. Uses `create` or `update` mode based on user intent
2. In create mode, asks short discovery questions first when critical details are missing
3. Captures the project name, goal, role, target builder, structure and format, style and tone, and constraints
4. Asks for framework, CSS framework, and database when the prompt is meant for a coding assistant or local build flow
5. Produces one copy-paste-ready YAML block inside a Markdown file
6. Includes a `ready_to_paste_prompt` multiline field inside the YAML
7. Uses version-safe writes for updates and never overwrites earlier files unless asked
