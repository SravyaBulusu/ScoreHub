import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    StyleSheet
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { globalStyles, colors, spacing, borderRadius, shadows, addPlayersStyles } from '../themes/globalStyles';

export default function AddPlayersScreen({ navigation }) {
    // Team A states
    const [teamAName, setTeamAName] = useState('');
    const [players, setPlayers] = useState([]);

    // Team B states
    const [teamBName, setTeamBName] = useState('');
    const [teamBPlayers, setTeamBPlayers] = useState([]);

    // Selected team for toggling UI
    const [selectedTeam, setSelectedTeam] = useState('A'); // default to Team A

    // Invite Link state
    const [generatedLink, setGeneratedLink] = useState('');

    // Handlers for Team A players
    const handleAddGuestPlayer = () => {
        setPlayers([...players, { name: '', isGuest: true }]);
    };

    const handleEditPlayer = (index, newName) => {
        const updated = [...players];
        updated[index].name = newName;
        setPlayers(updated);
    };

    const handleDeletePlayer = (index) => {
        const updated = players.filter((_, i) => i !== index);
        setPlayers(updated);
    };

    // Handlers for Team B players
    const handleAddGuestPlayerB = () => {
        setTeamBPlayers([...teamBPlayers, { name: '', isGuest: true }]);
    };

    const handleEditPlayerB = (index, newName) => {
        const updated = [...teamBPlayers];
        updated[index].name = newName;
        setTeamBPlayers(updated);
    };

    const handleDeletePlayerB = (index) => {
        const updated = teamBPlayers.filter((_, i) => i !== index);
        setTeamBPlayers(updated);
    };

    // Handler for Add Guest Player button - delegates based on selected team
    const handleAddGuestPlayerSelected = () => {
        if (selectedTeam === 'A') {
            handleAddGuestPlayer();
        } else {
            handleAddGuestPlayerB();
        }
    };

    return (
        <ScrollView style={globalStyles.container} contentContainerStyle={{ paddingBottom: spacing.xl }}>

            {/* HEADER with back arrow */}
            <LinearGradient
                colors={[colors.primary, colors.secondary]}
                style={addPlayersStyles.headerGradient}
            >
                <View style={[addPlayersStyles.headerRow, { justifyContent: 'space-between', alignItems: 'center' }]}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ padding: spacing.sm }}>
                        <Ionicons name="arrow-back" size={24} color={colors.white} />
                    </TouchableOpacity>
                    <View style={{ flex: 1, paddingLeft: spacing.sm }}>
                        <Text style={addPlayersStyles.headerSubtitle}>Prepare Your Match</Text>
                        <Text style={addPlayersStyles.headerTitle}>Add Players</Text>
                    </View>
                    <View style={{ width: 40 }} /> {/* spacer for alignment */}
                </View>
            </LinearGradient>

            {/* TEAM SELECTOR */}
            <View style={addPlayersStyles.teamRow}>
                <TouchableOpacity onPress={() => setSelectedTeam('A')}>
                    <Text style={[
                        addPlayersStyles.teamLabel,
                        selectedTeam === 'A' ? { fontWeight: 'bold', color: colors.primary } : null
                    ]}>
                        Team A
                    </Text>
                </TouchableOpacity>
                {/* <Text style={addPlayersStyles.vsLabel}>||</Text> */}
                <View style={addPlayersStyles.vsLabel}>
                    <Text style={{ fontSize: 16, color: colors.text }}>VS</Text>
                </View>
                <TouchableOpacity onPress={() => setSelectedTeam('B')}>
                    <Text style={[
                        addPlayersStyles.teamLabel,
                        selectedTeam === 'B' ? { fontWeight: 'bold', color: colors.secondary } : null
                    ]}>
                        Team B
                    </Text>
                </TouchableOpacity>
            </View>

            {/* TEAM NAME INPUT */}
            <View style={{ paddingHorizontal: spacing.lg }}>
                <TextInput
                    placeholder={selectedTeam === 'A' ? "Team A Name" : "Team B Name"}
                    style={addPlayersStyles.editableInput}
                    value={selectedTeam === 'A' ? teamAName : teamBName}
                    onChangeText={selectedTeam === 'A' ? setTeamAName : setTeamBName}
                />

                <Text style={addPlayersStyles.subheading}>Add Players</Text>

                {/* Add via link */}
                <TouchableOpacity
                    style={[addPlayersStyles.buttonPrimary, { marginBottom: spacing.sm, backgroundColor: '#004E89' }]}
                    onPress={() => {
                        const link = `https://mymatchapp.com/join?team=${selectedTeam}&id=${Math.floor(Math.random() * 100000)}`;
                        setGeneratedLink(link);
                    }}
                >
                    <Text style={[addPlayersStyles.buttonPrimaryText, { color: '#fff' }]}>Generate Invite Link</Text>
                </TouchableOpacity>



                {generatedLink !== '' && (
                    <View style={{ marginVertical: spacing.sm }}>
                        <Text style={{ color: colors.text, fontSize: 14, marginBottom: spacing.xs }}>Link: {generatedLink}</Text>
                        <TouchableOpacity
                            style={[addPlayersStyles.buttonSecondary, { borderColor: '#004E89', borderWidth: 1, paddingVertical: spacing.xs, paddingHorizontal: spacing.md, alignSelf: 'flex-start' }]}
                            onPress={() => {
                                alert('Link Copied: ' + generatedLink);
                            }}
                        >
                            <Text style={[addPlayersStyles.buttonSecondaryText, { color: '#004E89' }]}>Copy Link</Text>
                        </TouchableOpacity>
                    </View>
                )}

                {/* Add guest player button with plus icon */}
                <TouchableOpacity
                    onPress={handleAddGuestPlayerSelected}
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingVertical: spacing.sm,
                        paddingHorizontal: spacing.md,
                        borderWidth: 1,
                        borderColor: '#004E89',
                        borderRadius: borderRadius.md,
                        marginVertical: spacing.md,
                        backgroundColor: '#E8F0FE',
                    }}
                >
                    <Ionicons name="add-circle-outline" size={22} color="#004E89" style={{ marginRight: spacing.sm }} />
                    <Text style={{ color: '#004E89', fontWeight: '600', fontSize: 16 }}>
                        Add a guest player
                    </Text>
                </TouchableOpacity>

                {/* Players List */}
                <View style={addPlayersStyles.playerList}>
                    {(selectedTeam === 'A' ? players : teamBPlayers).map((player, index) => (
                        <View key={index} style={addPlayersStyles.playerRow}>
                            <TextInput
                                placeholder="Player name"
                                style={addPlayersStyles.playerInput}
                                value={player.name}
                                onChangeText={(text) => {
                                    if (selectedTeam === 'A') {
                                        handleEditPlayer(index, text);
                                    } else {
                                        handleEditPlayerB(index, text);
                                    }
                                }}
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    if (selectedTeam === 'A') {
                                        handleDeletePlayer(index);
                                    } else {
                                        handleDeletePlayerB(index);
                                    }
                                }}
                                style={addPlayersStyles.deleteIconButton}
                            >
                                <Ionicons name="trash-outline" size={20} color="#FF4D4D" />
                            </TouchableOpacity>
                        </View>
                    ))}
                </View>

                {/* Go to Toss button */}
                <TouchableOpacity
                    style={addPlayersStyles.tossButton}
                    onPress={() => navigation.navigate('TossScreen', { teamAName, teamBName })}
                >
                    <Text style={addPlayersStyles.tossButtonText}>Go to Toss</Text>
                </TouchableOpacity>

            </View>
        </ScrollView>
    );
}