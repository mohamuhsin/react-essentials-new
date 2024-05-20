import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <section id="core-concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (
                    <CoreConcept {...conceptItem} />
                ))}
            </ul>
        </section>
    );
}
