---
name: Delegate risky image/media operations to sub-agents
description: For operations likely to trigger API errors (image processing, large/unknown media, potentially malformed attachments), run them inside a sub-agent instead of the main session
type: feedback
originSessionId: e04b28d7-5664-43ff-80c6-5ea5624e7ae1
---
For operations that carry a risk of causing API errors in the main conversation — in particular image reads and media handling that could return errors like `400 invalid_request_error: Could not process image` — delegate the work to a sub-agent via the Agent tool rather than performing it in the main session.

**Why:** A prior session became unresponsive / ended abruptly when the main conversation tried to process a problematic image and the API returned a 400. Sub-agent failures are isolated and do not break the main session.

**How to apply:**
- When about to Read an image file (PNG/JPG/etc.) that is large, untrusted, of unknown provenance, or potentially corrupt, spawn an Agent (e.g., Explore or general-purpose) to read/inspect it and return a text summary.
- Same rule for bulk processing of many images, PDF pages with embedded images, or any attachment the user warns might be risky.
- Safe to read images directly in the main session only when small and known-good (e.g., a screenshot the user just pasted that clearly rendered).
