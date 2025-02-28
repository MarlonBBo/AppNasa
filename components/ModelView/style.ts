import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.2)',
        borderRadius: 8,
        backgroundColor: 'rgba(0,0,0,0.7)',
    },
    itemContainer: {
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        flex: 1,
        color: '#fff',
    },
    content: {
        marginTop: 12,
    },
    contentText: {
        borderTopWidth: 1,
        borderColor: "white",
        marginTop: 5,
        paddingTop: 8,
        fontSize: 14,
        color: '#fff',
        lineHeight: 20,
    },
    divider: {
        height: 1,
        backgroundColor: 'rgba(255,255,255,0.2)',
    },
    date: {
        color: "white",
        fontWeight: "bold",
        fontSize: 18,
        borderTopWidth: 1,
        borderColor: "white",
        marginTop: 8,
        paddingTop: 8
    }
});
