# Prompt Starter. {{project_name}}

## Document Control
- Version: 1.0.0
- Owner: Prompt Start Formatter Agent
- Date: {{today}}
- Status: Draft

## Prompt Target
- Builder or environment: {{target_builder}}
- Structure and format: {{structure_and_format}}

## Copy-Paste YAML
```yaml
product_or_project_name: "{{project_name}}"
goal: |
  {{goal_indented}}
role: |
  {{role_indented}}
target_builder: "{{target_builder}}"
structure_and_format: |
  {{structure_and_format_indented}}
style_and_tone: |
  {{style_and_tone_indented}}
details_and_constraints: |
  {{details_and_constraints_indented}}
technical_preferences:
  framework: "{{framework_or_not_specified}}"
  css_framework: "{{css_framework_or_not_specified}}"
  database: "{{database_or_not_specified}}"
  integrations: |
    {{integrations_indented_or_not_specified}}
ready_to_paste_prompt: |
  {{role_indented}}

  Build {{project_name}}.

  Goal:
  {{goal_indented}}

  Target builder:
  {{target_builder}}

  Structure and format:
  {{structure_and_format_indented}}

  Style and tone:
  {{style_and_tone_indented}}

  Details and constraints:
  {{details_and_constraints_indented}}

  Technical preferences:
  Framework: {{framework_or_not_specified}}
  CSS framework: {{css_framework_or_not_specified}}
  Database: {{database_or_not_specified}}
  Integrations: {{integrations_inline_or_not_specified}}

  Build the thinnest useful first version.
  Use explicit assumptions only when needed.
  Ask focused follow-up questions before making large product or technical leaps.
```

## Notes
- Framework, CSS framework, and database are optional, but strongly recommended for local coding workflows.
- Keep the YAML concise, practical, and easy to reuse across tools.
