# `src/pages/landing-page/AGENTS.md` validation evidence

Scenario: validate the landing-page child knowledge-base file after generation.

Invocation (PowerShell, repository root):

```powershell
$p = 'src/pages/landing-page/AGENTS.md'; $lines = Get-Content -LiteralPath $p; $required = @('## OVERVIEW','## STRUCTURE','## WHERE TO LOOK','## CONVENTIONS','## ANTI-PATTERNS'); $checks = @('Active order:','useStorage()','sendEmail(formData)','dormant section','existing user edit'); Write-Output ("path=" + (Resolve-Path -LiteralPath $p)); Write-Output ("line_count=" + $lines.Count); Write-Output ("line_count_valid=" + ($lines.Count -ge 30 -and $lines.Count -le 80)); foreach ($section in $required) { Write-Output ("section_{0}={1}" -f ($section.Substring(3).ToLower().Replace(' ','_').Replace('-','_')), ($lines -contains $section)) }; foreach ($check in $checks) { Write-Output ("contains_{0}={1}" -f ($checks.IndexOf($check) + 1), [bool](Select-String -LiteralPath $p -SimpleMatch $check)); }; Write-Output ("git_status=" + ((git status --short -- $p) -join ' '))
```

Binary observables captured:

```text
path=C:\github\matej.parizek\src\pages\landing-page\AGENTS.md
line_count=43
line_count_valid=True
section_overview=True
section_structure=True
section_where_to_look=True
section_conventions=True
section_anti_patterns=True
contains_1=True
contains_2=True
contains_3=True
contains_4=True
contains_5=True
git_status=?? src/pages/landing-page/AGENTS.md
```
