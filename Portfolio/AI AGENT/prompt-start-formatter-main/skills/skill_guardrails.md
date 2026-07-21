# Skill. Guardrails and Constraints

## Goal
Make the starter prompt safer and more usable by capturing explicit limits and non-goals.

## Rules
- Ask for details, constraints, guardrails, and non-goals
- Preserve user wording when it defines hard constraints
- Prefer concrete constraints over vague warnings
- Include scope boundaries such as `do not add marketplace`, `mobile first`, `no payments in v1`, or `use Supabase only`
- Do not invent hidden requirements or policy statements
- If constraints are unknown, keep the section concise and use the user's available context only

## Output
Fold the final guardrails into `details_and_constraints` and into `ready_to_paste_prompt`.
