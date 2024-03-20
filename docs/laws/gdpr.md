# GDPR

**General Data Protection Regulation** (**GDPR**) is a European regulation on
how personal data are stored and treated. It dictates among other things that
personal data of EU citizens might not be stored on servers outside of the EU
(note to self: double check this).

## PII and personal data

**Personal identifiable information** (**PII**) is data that can be used to
identify a person. This includes name, email, gender, ethnicity, biometrics etc.

PII may not be collected without consent. If e.g. storing any persistent cookies
(such as for tracking), consent is required. One can use a Consent Management
Platform (CMP) for handling that.

## Controllers and processors

In GDPR there is a concept of controllers and processors. A controller controls
a customer's data and a processor processes it on the controller's behalf. For
example, if having a form submission service called FormsXY that stores the
forms in GCP BigQuery, then FormsXY is a controller and GCP BigQuery is a
processor.

There are stricter regulations on a controller than a processor. For example,

- Responsibility for GDPR compliance of any processor they are using.
- Consider risks to freedom of rights of their customers.
- Take appropriate measures to minimize risks.
