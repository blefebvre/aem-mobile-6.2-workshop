# Component Development

There are a lot of moving pieces with AEM Components and a lot to ask and think about when developing a component.

As outlined in the previous 'Component Development' step, lets highlight some of the more advanced things to make component development more robust.

## Anatomy of a Component
### Using Sling inheritance - sling:resourceSuperType

When a Component is requested to render a content resource, the rendering mechanism defaults to the <name-of-the-component> plus <the-specified-selector>. For sake of this argument, the selector will always be .HTML.
In the case of the "aemm-workshop/components/basic-component", it will look to "aemm-workshop/components/basic-component/basic-component.html" to render the content.


We can use this to our advantage to extend components. Look at how the following components relate together using sling:resourceSuperType

- <a href="http://localhost:4502/crx/de/index.jsp#/apps/aemm-workshop/components/pages/extended-page" target="_blank"> The extended page Component </a> node has a property called "sling:resourceSuperType"
- It points to the <a href="http://localhost:4502/crx/de/index.jsp#/apps/aemm-workshop/components/pages/basic-page" target="_blank"> the basic page Component </a>
- which then points to the Out Of The Box "Page" component ( wcm/foundation/components/page )

So, you're left with a heirarchy of "Page" <- "Basic Page" <- "Extended Page".

- When you look at the aemm-workshop/components/pages/extended-page node, it doesn't contain any 'extended-page.html'
- The inheritance model will then go to its superResourceType.
- Does aemm-workshop/components/pages/basic-page have 'basic-page.html' ? No.
- This process will repeat until it finds one.

Where this gets even more useful is that it always starts with the request resource and moves backwards.
- You'll notice that 'extended-page' does has a 'body.html'.
- The OOTB wcm/foundation/components/page has code that includes a multiple individual files, one of which id body.html (you can check wcm/foundation/components/page/page.html for more specific details)
- In this case, when 'page.html' includes 'body.html', it first starts at the original resourceType.

(There are a lot of docs about inheritance, selectors, resolution and a lot of other Sling concepts that explain it better.
<a href="https://sling.apache.org/documentation/the-sling-engine/url-to-script-resolution.html" target="_blank"> Sling docs here </a>
<a href="https://docs.adobe.com/docs/en/aem/6-2/develop/platform/sling-cheatsheet.html" target="_blank"> Sling cheat sheet here </a>


### Clientlibs, Javascript / CSS

One of the main things with how JS and CSS get packaged when using Clientlibs with AEMMobile is that its all contained within the same package. If you include CSS from a component or library that you're using that has global styles, theres a pretty good chance this is going to mess up the rest of your app (if you're not aware of it)
Even if you have 2 separate components that will never exist on the same Article in an AEMMobile application, all CSS/JS gets compiled down and included.

This also is an issue that can come up with javascript libraries that either rely on a selector that has a generic class name, and you've allowed an AEM Author to drop more than one of these components on a page.

### LESS
LESS is also supported for making CSS easier. In the /etc/clientlibs/aemm-workshop/main, there are some common LESS practices. The variables/mixins are then included in the LESS files for extended sample component class.

LESS has some <a href="http://lesscss.org/" target="_blank"> pretty good documentation </a>





| Previous      |         Next |
| :------------ | ------------:|
| [⇦ Component Development](2_component_development.md) | [Template Development ⇨](4_template_development.md) |
