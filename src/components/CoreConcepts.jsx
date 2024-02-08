import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {

return (
    <section id="core-concepts">
    <h2>Core concepts</h2>
    {/* map throught data to dynamically generate the list*/}
    <ul>
    {CORE_CONCEPTS.map((conceptItem) =>
    // key prop to tell the items a part
      (<CoreConcept key={conceptItem.title} {...conceptItem} />
    ))}
    </ul>
    {/* <ul>
      <CoreConcept
        title={CORE_CONCEPTS[0].title}
        description={CORE_CONCEPTS[0].description}
        image={CORE_CONCEPTS[0].image}
      /> */}

    {/* alternative to the above code */}
    {/* <CoreConcept {...CORE_CONCEPTS[1]} />
      <CoreConcept {...CORE_CONCEPTS[2]} />
      <CoreConcept {...CORE_CONCEPTS[3]} />

    </ul> */}
  </section>


)


}