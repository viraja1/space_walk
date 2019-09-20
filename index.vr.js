import React, {Component} from 'react';
import {
    AppRegistry,
    asset,
    Pano,
    StyleSheet,
    Text,
    View
} from 'react-vr';

const places = [
    {
        title: 'Mars',
        image: 'mars.jpg'
    },
    {
        title: 'Space Station',
        image: 'space_station.jpg'
    },
    {
        title: 'Milky Way',
        image: 'milky_way.jpg'
    },
    {
        title: 'Jupiter',
        image: 'jupiter.jpg'
    }
];

class SpaceWalk extends Component {
    constructor() {
        super();

        this.state = {
            place: 'earth.jpg'
        }
    }

    render() {
        return (
            <View>
                <Pano source={asset(this.state.place)}></Pano>
                <View style={styles.menu}>
                    {
                        places.map((place, index) => {
                            return (
                                <View
                                    style={styles.menuItem}
                                    key={index}
                                    onEnter={() => this.setState({place: place.image})}
                                >
                                    <Text style={styles.menuItemText}>{place.title}</Text>
                                </View>
                            )
                        })
                    }
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    menu: {
        width: 5,
        height: 1.25,
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        justifyContent: 'space-around',
        transform: [
            {translate: [-2, 0, -7.5]}
        ]
    },
    menuButton: {
        backgroundColor: '#fff',
        borderRadius: 0.25,
        width: 0.5,
        height: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        borderWidth: 0.01,
        transform: [
            {translate: [-2, 0, -5]}
        ]
    },
    menuButtonText: {
        textAlign: 'center',
        fontSize: 0.15,
        color: '#000'
    },
    menuItem: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 1,
        height: 1,
        borderRadius: 0.5,
        borderWidth: 0.02,
        backgroundColor: '#fff'
    },
    menuItemText: {
        fontSize: 0.2,
        textAlign: 'center',
        color: '#000'
    }
});

AppRegistry.registerComponent('SpaceWalk', () => SpaceWalk);