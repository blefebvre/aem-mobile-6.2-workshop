# Template Development

Templates are one of the fundamental blocks of AEM.

They control (not just limited to):
- Properties on the node that will be created.
- Sub-content nodes that be created.
- Permissions on what components can be used in the template
- Permissions on what type of/where the content resource can be created

## Template Breakdown

Consider the following examples that have already been created:
- Navigate to <a href="http://localhost:4502/libs/mobileapps/dps/admin/content/dashboard/entities.html/content/mobileapps/aemm-workshop-sample" target="_blank">this URL</a>.
- Create a New Article with the 'Basic Template' as the template
- Go back, Create another New Article with the 'Slightly Different Basic Template' as the template

- Open each of the new templates you've created side by side and notice the changes
- One 'Article' with components that come with it and one will be blank.

## Template 'resourceType' and how it relates to a template.
- Open CRX/DE and naviate to the resourceType that both the 'Basic Template' and 'Slightly Different Basic Template' point to (hint: <a href="http://localhost:4502/crx/de/index.jsp#/apps/aemm-workshop/components/pages/basic-page" target="_blank">here </a> )
- You'll notice that despite both Templates having the same resourceType, they look different.

So, in the above scenario, the 'Basic Page' *component* ('aemm-workshop/components/pages/basic-page') is used to render the respective content that were just created when each of the new Articles was created.

If you open CRX/DE and navigate to where the <a href="http://localhost:4502/crx/de/index.jsp#/content/mobileapps/aemm-workshop-sample/articles" target="_blank">Article content nodes are found,</a> you'll notice that the two newly created Articles have different content under their 'jcr:content' subnodes.
You'll also notice that these newly created nodes look identical to their respective template.


## Designs that Control Template Permissions

If you navigate to <a href="http://localhost:4502/crx/de/index.jsp#/etc/designs/aemm-workshop/jcr%3Acontent/basic-page/content-parsys" target="_blank"> the design for the app</a>, you can see an example of how 'The Design' specified for the app controls what components are allowed in what templates.
Examine the
- 'basic-page' node maps to the name of the name of the Template (aemm-workshop/templates/basic-page)
- 'content-parsys' node maps to the sub node for the Template
- On the 'content-parsys' node, there is a property called 'components' which represents the individual or groups of components that an AEM Author can add to this container.








| Previous      |         Next |
| :------------ | ------------:|
| [⇦ Your own component](3_your_own_component.md) | [Publishing to On-Demand Services ⇨](5_publishing_to_mods.md) |