// import React from 'react';
// import { View, Text } from 'react-native';
// import { colors, spacing } from '../themes/globalStyles';

// export default function ScoringScreen({ route }) {
//   const { teamAName, teamBName, tossWinner, optedTo } = route.params || {};

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: spacing.lg, backgroundColor: colors.white }}>
//       <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Scoring Screen</Text>
//       <Text style={{ marginTop: spacing.md, fontSize: 16 }}>
//         {teamAName} vs {teamBName}
//       </Text>
//       <Text style={{ marginTop: spacing.sm }}>
//         Toss won by {tossWinner === 'teamA' ? teamAName : teamBName} and opted to {optedTo}
//       </Text>
//       {/* You can add your scoring UI here */}
//     </View>
//   );
// }


import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, addPlayersStyles } from '../themes/globalStyles';

export default function SelectOpeningPlayersScreen({ route, navigation }) {
  const { teamAName, teamBName, tossWinner, optedTo } = route.params || {};

  const [striker, setStriker] = useState('');
  const [nonStriker, setNonStriker] = useState('');
  const [openingBowler, setOpeningBowler] = useState('');

  const canStartMatch = striker.trim() && nonStriker.trim() && openingBowler.trim();

  const handleStartMatch = () => {
    if (canStartMatch) {
      navigation.navigate('ScoringScreen1', { 
        teamAName, 
        teamBName, 
        tossWinner, 
        optedTo,
        striker: striker.trim(),
        nonStriker: nonStriker.trim(),
        openingBowler: openingBowler.trim()
      });
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={addPlayersStyles.headerGradient}
      >
        <View style={addPlayersStyles.headerRow}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingRight: spacing.md, justifyContent: 'center' }}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text style={addPlayersStyles.headerTitle}>
              Select Opening players
            </Text>
          </View>
        </View>
      </LinearGradient>

      <View style={{ padding: spacing.lg, backgroundColor: '#f5f5f5', flex: 1 }}>

        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: spacing.md, color: colors.primary }}>
            Striker
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.gray,
              paddingVertical: spacing.md,
              paddingHorizontal: 4,
              fontSize: 16,
              color: colors.black,
              backgroundColor: 'transparent',
            }}
            placeholder="Player name"
            placeholderTextColor="#999"
            value={striker}
            onChangeText={setStriker}
          />
        </View>

        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: spacing.md, color: colors.primary }}>
            Non-striker
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.gray,
              paddingVertical: spacing.md,
              paddingHorizontal: 4,
              fontSize: 16,
              color: colors.black,
              backgroundColor: 'transparent',
            }}
            placeholder="Player name"
            placeholderTextColor="#999"
            value={nonStriker}
            onChangeText={setNonStriker}
          />
        </View>

        <View style={{ marginBottom: spacing.lg }}>
          <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: spacing.md, color: colors.primary }}>
            Opening bowler
          </Text>
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: colors.gray,
              paddingVertical: spacing.md,
              paddingHorizontal: 4,
              fontSize: 16,
              color: colors.black,
              backgroundColor: 'transparent',
            }}
            placeholder="Player name"
            placeholderTextColor="#999"
            value={openingBowler}
            onChangeText={setOpeningBowler}
          />
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity
          disabled={!canStartMatch}
          onPress={handleStartMatch}
          style={[
            addPlayersStyles.startScoringButton,
            !canStartMatch && addPlayersStyles.startScoringButtonDisabled,
            { marginTop: spacing.lg, width: '100%' },
          ]}
        >
          <Text style={addPlayersStyles.startScoringButtonText}>Start match</Text>
        </TouchableOpacity>

        <View style={{ height: spacing.lg }} />
      </View>
    </ScrollView>
  );
}