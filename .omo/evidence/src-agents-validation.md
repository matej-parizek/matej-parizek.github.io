# `src/AGENTS.md` validation evidence

Scenario: validate the generated source guidance file.

Invocation (PowerShell, repository root):

```powershell
$p = 'src/AGENTS.md'; $lines = Get-Content -LiteralPath $p; $required = @('## OVERVIEW','## STRUCTURE','## WHERE TO LOOK','## CONVENTIONS','## ANTI-PATTERNS'); Write-Output ("path=" + (Resolve-Path -LiteralPath $p)); Write-Output ("line_count=" + $lines.Count); foreach ($section in $required) { Write-Output ("section_{0}={1}" -f ($section.Substring(3).ToLower().Replace(' ','_')), ($lines -contains $section)) }; Write-Output ("git_status=" + ((git status --short -- $p) -join ' '))
```

Binary observables captured:

```text
path=C:\github\matej.parizek\src\AGENTS.md
line_count=50
section_overview=True
section_structure=True
section_where_to_look=True
section_conventions=True
section_anti-patterns=True
git_status=?? src/AGENTS.md
```
