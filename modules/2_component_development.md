# Component Development

A simple component has been included in the provided code repository, the source of which can be found in AEM at the following path:

    /apps/aemm-workshop/components/basic-component

It can also be opened locally in CRX/DE Lite at <a href="http://localhost:4502/crx/de/index.jsp#/apps/aemm-workshop/components/basic-component" target="_blank">this URL</a>.

The `basic-component`'s purpose is to enable an author to link to another page in the app. The page can be an On-Demand article, collection, or another AEM-based page. The page to link to, as well as the link text, can both be configured via the component's dialog.


## Testing and use of the component

The component has already been <a href="http://localhost:4502/editor.html/content/mobileapps/aemm-workshop-sample/articles/homepage.html" target="_blank">included in an AEM page</a>, along with a few other building block components.

To add another component to the page:

1. ensure you are in Edit mode, via the dropdown at the top right of the Editor's header
2. toggle the side panel via the leftmost icon in the Editor's header
3. select the "Components" tab (`+` icon)
4. drag and drop one of the available components onto the page

To edit an existing component:

1. in Edit mode, select the component
2. in the small popover that appears, tap the wrench icon to configure the component via it's dialog


## Anatomy of a Component

### cq:Component node

The `basic-component` node has a few key properties:

- `allowedParents: *` - this component can be placed into any other container component (such as a `parsys`)
- `componentGroup: AEMM Workshop` - this component group has been enabled for use in the provided template, so any new components created with this group will be available for use without any further changes needed
- `jcr:title: Basic Link` - "Basic Link" is the name this component will be displayed as in Edit mode


### HTL Script + Javascript

This component uses [HTL](https://docs.adobe.com/docs/en/htl/overview.html) (previously Sightly) as its scripting language. This is the recommended server side template system for HTML in AEM. By convention, the HTL script for this component is named `basic-component.html` (the name of the component):

    <section class="page-link" data-sly-use.pageLinker="${'page-linker.js' @ linkedPagePath=properties.linkedPagePath}">
        <a x-cq-linkchecker="valid" href="${pageLinker.linkHref @ context='attribute'}" class="page-link--tappable">
        	${properties.linkTitle || "Component placeholder text"}
        </a>
    </section>

HTL is standard HTML5, so it should look familiar to a front end developer. The server side bits are unique to HTL and worth pointing out:

- `data-sly-use` enables a developer to wire up server side logic - in this case, Javascript (Java can also be used) - to the markup
- take a look at `page-linker.js` to see the <a href="https://docs.adobe.com/docs/en/htl/docs/getting-started.html#Use-API for Accessing Logic" target="_blank">Javascript Use-API</a> in action
- the two properties configured in the component's dialog, `linkedPagePath` and `linkTitle` are used in different contexts
    - `linkedPagePath` is passed to page-linker.js, where the href is determined based on `wcmmode` and the type of page that is being linked to
    - `linkTitle` is used as the text for the link, with a default value of "Component placeholder text" when falsy
- `x-cq-linkchecker="valid"` is not a feature of HTL, but is used to avoid the AEM Link Checker complaining about `navto://` links


### Clientlib

You will find a sibling node to the above script called `clientlib`, short for client side library, which is where any CSS and Javascript (client side) that is component-specific should reside. The convention of keeping the client side code near the server side component code helps keep things organized.

Try placing some code in clientlib/script.js and refreshing the homepage article.


### cq:dialog

The cq:dialog defines the form that is displayed when the component is configured. Take a look at the `linkTitle` resource to see how a field of this dialog is defined: `/apps/aemm-workshop/components/basic-component/cq:dialog/content/items/column/items/linkTitle`

For more on the available dialog building blocks, check out <a href="https://docs.adobe.com/docs/en/aem/6-1/ref/granite-ui/api/jcr_root/libs/granite/ui/components/foundation/form/index.html" target="_blank">the Granite docs</a>.

***

| Previous      |         Next |
| :------------ | ------------:|
| [⇦ Environment Setup](1_environment_setup.md) | [Your own component ⇨](3_your_own_component.md) |