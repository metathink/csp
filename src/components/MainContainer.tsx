import UnitContainer from "./unit/Container"
import MultiContainer from "./multi/Container"

export default ({ tab }: { tab: string }) => {
    return (
        <>
            {
                tab === "unit" ? (
                    <UnitContainer />
                ) : (
                    <MultiContainer />
                )
            }
        </>
    )
}