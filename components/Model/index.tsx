import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { styles } from './style';
import { ModelProps } from '@/types/Data';

type AccordionItemProps = {
    title: string;
    content: string;
    date: string;
    isExpanded: boolean;
    onPress: () => void;
}

const AccordionItem = ({ title, content, date, isExpanded, onPress }: AccordionItemProps) => {
    return (
        <View style={styles.itemContainer}>
            <TouchableOpacity 
                style={styles.header}
                onPress={onPress}
            >
                <Text style={styles.title}>{title}</Text>
                <Feather 
                    name={isExpanded ? "chevron-up" : "chevron-down"} 
                    size={24} 
                    color="#fff"
                />
            </TouchableOpacity>
            {isExpanded && (
                <View style={styles.content}>
                    <Text style={styles.contentText}>{content}</Text>
                    <Text style={styles.date}>{date}</Text>
                </View>
            )}
        </View>
    );
};

export function Model({ item }: ModelProps) {
    const [expandedItem, setExpandedItem] = useState<string | null>(null);

    return (
        <View style={styles.container}>
                    <AccordionItem 
                        title={item.title}
                        content={item.content}
                        date={item.date}
                        isExpanded={expandedItem === item.id}
                        onPress={() => setExpandedItem(expandedItem === item.id ? null : item.id)}
                    />
        </View>
    );
}