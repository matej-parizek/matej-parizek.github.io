# Manual QA — final built redesign

<verdict>PASS</verdict>

Confidence: HIGH for P0/P1 behavior. The in-app browser connector was unavailable, so fresh browser evidence used the installed agent-browser fallback against the same local preview URL. No form was submitted and no build was run.

## manualQa

### surfaceEvidence

| scenario id | criterion reference | surface | exact invocation | verdict | artifactRefs |
|---|---|---|---|---|---|
| S01 | route/load | HTTP + browser desktop | `curl.exe -i http://127.0.0.1:4174/`; `agent-browser open ...`; `snapshot -i` | PASS | A01,A02 |
| S02 | responsive desktop/tablet/mobile | Browser 1280x900, 768x900, 375x812 | `set viewport <w> <h>`; `eval innerWidth/scrollWidth`; screenshots | PASS | A01,A03,A04,A05,A06 |
| S03 | legacy/main anchors | Browser | DOM target check for `hero/about/skills/experience/projects/expertise/background/contact/top/main-content`; click main hashes; open `/#experience` | PASS | A01 |
| S04 | mobile menu open/close/Escape | Browser 375x812 | click Menu; inspect `aria-expanded`; click Close; open then `press Escape` | PASS | A01,A07 |
| S05 | theme toggle/persistence | Browser desktop/mobile | click Dark mode; reload; click Light mode; inspect `html.className` and label | PASS | A01,A03,A04 |
| S06 | project details | Browser desktop | click first `summary`; inspect `details.open` and disclosure text | PASS | A01,A08 |
| S07 | skip/focus | Browser desktop | keyboard `Tab`; inspect `:focus-visible` and computed outline | PASS | A01 |
| S08 | required/error associations | Browser mobile | focus submit; `press Enter`; inspect `aria-invalid`, `aria-describedby`, error text and live status | PASS | A01,A09 |
| S09 | optional phone/preferred contact | Browser mobile | fill phone/company/message; select `Phone`; inspect values; clear network log | PASS | A01 |
| S10 | CV/contact links | Browser + HTTP | DOM href extraction; `curl.exe -sS -D - -o NUL` for both PDF assets | PASS | A01,A02 |
| S11 | console/page errors | Browser current build | `errors --clear`; `console --clear`; reload; inspect both | PASS | A01 |

### adversarialCases

| scenario id | criterion reference | adversarial class | expected behavior | verdict | artifactRefs |
|---|---|---|---|---|---|
| A01 | responsive layout | 375px overflow | `innerWidth === scrollWidth` | PASS | A01,A05 |
| A02 | mobile navigation | Escape dismissal | open menu closes and returns `aria-expanded=false` | PASS | A01,A07 |
| A03 | form validation | empty required fields | name/email/message rejected with matching described errors | PASS | A01,A09 |
| A04 | form validation | malformed email | only email error remains; no network request | PASS | A01,A10 |
| A05 | form safety | valid optional fields without submit | phone/preferred contact persist and no request is sent | PASS | A01 |
| A06 | navigation | direct legacy/main anchors | all required target IDs exist and direct experience anchor lands on target | PASS | A01 |
| A07 | accessibility | keyboard focus | `:focus-visible` outline is solid 2px | PASS | A01 |
| A08 | assets | missing/bad CV endpoint | both exact resume links return HTTP 200 `application/pdf` | PASS | A02 |
| A09 | runtime | console/page error | reload yields no console or page errors | PASS | A01 |

### artifactRefs

| id | kind | description | path |
|---|---|---|---|
| A01 | transcript | Fresh browser action/evaluation log | [fresh-qa-transcript.txt](./fresh-qa-transcript.txt) |
| A02 | transcript | Fresh HTTP headers for root and both resume assets | [fresh-http-transcript.txt](./fresh-http-transcript.txt) |
| A03 | screenshot | Fresh desktop 1280 light capture | [fresh-desktop-1280-light.png](./fresh-desktop-1280-light.png) |
| A04 | screenshot | Fresh tablet 768 light capture | [fresh-tablet-768-light.png](./fresh-tablet-768-light.png) |
| A05 | screenshot | Fresh mobile 375 light capture | [fresh-mobile-375-light.png](./fresh-mobile-375-light.png) |
| A06 | screenshot | Fresh full-page mobile dark capture | [fresh-mobile-dark-full.png](./fresh-mobile-dark-full.png) |
| A07 | screenshot | Fresh mobile dark menu-open capture | [fresh-mobile-dark-menu.png](./fresh-mobile-dark-menu.png) |
| A08 | screenshot | Fresh project disclosure-open capture | [fresh-project-details-current.png](./fresh-project-details-current.png) |
| A09 | screenshot | Fresh required-form errors with visible associated messages | [fresh-form-required-errors-full.png](./fresh-form-required-errors-full.png) |
| A10 | screenshot | Fresh malformed-email validation capture | [fresh-form-invalid-email.png](./fresh-form-invalid-email.png) |

## blocking_issues

None found in the requested P0/P1 scope.
