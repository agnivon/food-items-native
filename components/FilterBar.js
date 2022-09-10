import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, View, StyleSheet, Text } from 'react-native';

import BootstrapStyleSheet from 'react-native-bootstrap-styles';

const bootstrapStyleSheet = new BootstrapStyleSheet();
const { s, c } = bootstrapStyleSheet;

import { toggleFilter } from '../actions';

const FilterBar = () => {

    /* const [filter, setFilter] = useState({
        fatFree: true,
        vegan: true
    }); */
    const dispatch = useDispatch();

    const filters = useSelector(state => state.filters);

    return (
        <View style={[s.row, s.bgSecondary]}>
            <Text style={[s.col3, styles.switchLabel]}>Vegan</Text>
            <Switch value={filters.Vegan}  style={[s.col3]} onValueChange={() => dispatch(toggleFilter('Vegan'))}/>
            <Text style={[s.col3, styles.switchLabel]}>Fat-Free</Text>
            <Switch value={filters['Fat-Free']} onValueChange={() => dispatch(toggleFilter('Fat-Free'))}/>
        </View>
    );
}

const styles = StyleSheet.create({
    switchLabel: {
        fontSize: 17,
        paddingTop: 12,
        color: '#fff'
    }
})

export default FilterBar;