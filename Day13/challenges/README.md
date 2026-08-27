For every program you wrote in Sections 14–16, run and document results for the following inputs. Add each result to a README.md inside challenges/.

| Test Case | Example Input | What You're Checking |
|---|---|---|
| Empty array | [] | Does your code crash or misbehave (e.g., average = 0/0)? |
| One element | [50] | Do "highest" and "lowest" both correctly equal the single value? |
| Multiple elements | [67, 89, 45, 92, 78] | Normal case — does everything compute correctly? |
| Repeated values | [50, 50, 50] | Does highest/lowest logic still work when all values are equal? |
| Zero values | [0, 20, 0, 40] | Does a 0 value break any calculation (e.g., falsy-value bugs)? |
| Negative values (where relevant) | [-10, 20, -5] | Does your threshold/counting logic still behave correctly? |
| Large values | [100000, 250000] | Does anything overflow or format oddly? |
| Unexpected input (where applicable) | e.g. very long array | Does traversal still work at scale? |

Document what happened for each case — including any bugs you found and fixed as a result.