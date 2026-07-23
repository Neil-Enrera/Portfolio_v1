# Prompt Start Formatter Agent

Prompt Start Formatter Agent interviews the user about the product or project they want to build and produces:
- `docs/prompts/{{project_slug}}/PROMPT-STARTER-{project_name}.md`

It is built for fast prompt preparation before using Base44, Lovable, Replit, Claude Code, Cursor, Codex, Copilot, or another builder.

The interview flow asks:
- Product or project name
- Goal
- AI role to assume
- Target builder or environment
- Structure and format such as web app, mobile app, both, automation, landing page, or another output shape
- Style and tone
- Details, guardrails, and constraints
- Optional framework, CSS framework, and database preferences, especially for local coding or IDE-based builds

The output is a Markdown doc with one YAML block that the user can copy-paste.
That YAML also includes a `ready_to_paste_prompt` multiline field.

---

## Agent design format

`prompt-start-formatter` follows this structure:
- `promp/`
- `skills/`
- `agent.yaml`
- `README.md`

---

## How to use

### Step 1. Refer the agent
Start your prompt with:

```text
Use .agent/strategy/prompt-start-formatter
```

### Step 2. Start the create flow
Provide whatever you already know. The agent will ask the missing questions.

Create mode sample:
```text
Use .agent/strategy/prompt-start-formatter

project_name: ZenFlow
goal: Build a calm scheduling and client management app for yoga instructors.
role: Act as an expert UI/UX designer and full stack developer.
target_builder: Lovable
structure_and_format: Web app first, with mobile-responsive layouts.
style_and_tone: Calm, premium, minimal, and welcoming for yoga instructors.
details_and_constraints: Keep the MVP focused on scheduling, class packages, and client notes. Do not add a marketplace in v1.

Ask the missing questions.
Then generate the prompt starter document.
```

What happens:
- The agent asks short discovery questions only for missing critical details.
- It asks where the prompt will be used: Base44, Lovable, Replit, Claude Code, Cursor, Codex, Copilot, or another environment.
- If the target is a local coding environment, it asks for optional framework, CSS framework, and database preferences.
- It creates one Markdown prompt starter document with a copy-paste-ready YAML block.

### Step 3. Use update mode for the next version
Provide:
- `mode: update`
- `project_name`
- `project_slug`
- `update_scope`
- `change_reason`

Example:
```text
Use .agent/strategy/prompt-start-formatter

mode: update
project_name: ZenFlow
project_slug: zenflow
update_scope: Change the target from web-only to web and mobile, and add Next.js, Tailwind CSS, and Supabase preferences.
change_reason: The build will move from Lovable into Claude Code.

Create the next versioned prompt starter file.
```

---

## Output conventions

### Directory and files
- Directory: `docs/prompts/{{project_slug}}`
- Base file:
  - `PROMPT-STARTER-{project_name}.md`
- Next versions:
  - `PROMPT-STARTER-{project_name}.v2.md`, `PROMPT-STARTER-{project_name}.v3.md`, ...

### Versioning rules
- Base file is treated as v1.
- Agent detects the highest existing `vN` and writes `vN+1`.
- Document Control version must use semantic version format `MAJOR.MINOR.PATCH`.
- Agent never overwrites existing files unless explicitly requested.

### YAML structure
The YAML output keeps a fixed order:
- `product_or_project_name`
- `goal`
- `role`
- `target_builder`
- `structure_and_format`
- `style_and_tone`
- `details_and_constraints`
- `technical_preferences`
- `ready_to_paste_prompt`

Framework, CSS framework, and database are optional, but strongly recommended when building with Claude Code, Cursor, Codex, Copilot, or another local coding setup.

---

## Copy-paste output shape

```yaml
product_or_project_name: "ZenFlow"
goal: |
  Build a calm scheduling and client management app for yoga instructors.
role: |
  Act as an expert UI/UX designer and full stack developer.
target_builder: "Lovable"
structure_and_format: |
  Web app first, with mobile-responsive layouts.
style_and_tone: |
  Calm, premium, minimal, and welcoming for yoga instructors.
details_and_constraints: |
  Keep the MVP focused on scheduling, class packages, and client notes.
  Do not add a marketplace in v1.
technical_preferences:
  framework: "Not specified"
  css_framework: "Not specified"
  database: "Not specified"
  integrations: |
    Not specified
ready_to_paste_prompt: |
  Act as an expert UI/UX designer and full stack developer.

  Build ZenFlow.

  Goal:
  Build a calm scheduling and client management app for yoga instructors.

  Target builder:
  Lovable

  Structure and format:
  Web app first, with mobile-responsive layouts.

  Style and tone:
  Calm, premium, minimal, and welcoming for yoga instructors.

  Details and constraints:
  Keep the MVP focused on scheduling, class packages, and client notes.
  Do not add a marketplace in v1.

  Technical preferences:
  Framework: Not specified
  CSS framework: Not specified
  Database: Not specified
  Integrations: Not specified

  Build the thinnest useful MVP first.
  If important details are missing, ask focused follow-up questions before making large assumptions.
```

## Tips for best results
- Keep the goal outcome-focused, not feature-stuffed.
- Make the role concrete, for example `Act as an expert UI/UX designer and full stack developer`.
- Be explicit about the output shape: web app, mobile app, both, landing page, workflow automation, or another format.
- Put non-goals and guardrails inside `details_and_constraints`.
- If you are building locally, specify framework, CSS framework, and database early so the generated prompt is technically usable.
