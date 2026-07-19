# Skill. YAML Prompt Output

## Goal
Generate one stable YAML block that can be copied into an AI builder or coding assistant.

## Rules
- Output the final artifact as a Markdown document with one YAML code block
- Keep YAML keys in this order:
  - `product_or_project_name`
  - `goal`
  - `role`
  - `target_builder`
  - `structure_and_format`
  - `style_and_tone`
  - `details_and_constraints`
  - `technical_preferences`
  - `ready_to_paste_prompt`
- Inside `technical_preferences`, keep keys in this order:
  - `framework`
  - `css_framework`
  - `database`
  - `integrations`
- Use YAML block scalars for multi-line sections
- Keep the wording practical and implementation-minded
- Use `Not specified` for optional technical preferences that remain unknown
- The `ready_to_paste_prompt` field must be assembled from the final answers and must be directly reusable

## Output
Prompt starter content only, Markdown format.
Target file: `docs/prompts/{{project_slug}}/PROMPT-STARTER-{project_name}.md` (or next `.vN` in update mode).
