// ─────────────────────────────────────────────
//  Site settings – edit these, nothing else needed
// ─────────────────────────────────────────────
export const SITE = {
  name: 'Fast Easy Payments',
  email: 'wafy@fasteasypayments.com',
  phoneDisplay: '(929) 340-9071',
  phoneHref: 'tel:+19293409071',
  address: 'New York, USA',

  // Where every "Get Started" button goes.
  // '#contact' = scroll to the form on this page.
  // Or paste an external link (e.g. a Google Form) to open it in a new tab.
  getStartedUrl: '#contact',

  // Free form service: https://web3forms.com  (key goes in the .env file)
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY,
}
