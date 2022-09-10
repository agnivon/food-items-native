export const actionTypes = {
    'FILTER_TOGGLED': 'foodItems/filterToggled'
}

export const toggleFilter = (filterName) => {
    return (
        {
            type: actionTypes.FILTER_TOGGLED,
            payload: filterName
        }
    )
}