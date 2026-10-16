# Certificate PDFs Directory

Place your verified certificate PDF files in this folder (`public/certificates/`):

- `developing-secure-software.pdf` (The Linux Foundation)
- `dsa.pdf` (ScholarHat)
- `python-programming.pdf` (freeCodeCamp)
- `react.pdf` (Cursa)
- `aws-cloudfront.pdf` (Coursera)
- `generative-ai.pdf` (Google Cloud)

Once placed, update the `certificateUrl` field for the corresponding certification in `src/data/portfolioData.js`:
```javascript
{
  id: "cert-1",
  title: "Developing Secure Software",
  organization: "The Linux Foundation",
  certificateUrl: "/certificates/developing-secure-software.pdf"
}
```
The portfolio will immediately show the "View Certificate" button and open the document inside the interactive certificate viewer modal with zoom, download, and new-tab support!
