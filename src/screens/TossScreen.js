import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing, addPlayersStyles } from '../themes/globalStyles';

export default function TossScreen({ route, navigation }) {
  const { teamAName, teamBName } = route.params || {};

  // State for toss winner and choice
  const [tossWinner, setTossWinner] = useState(null); // "teamA" or "teamB"
  const [optedTo, setOptedTo] = useState(null); // "Bat" or "Bowl"
  const canStart = tossWinner && optedTo;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.white }}>
      {/* HEADER */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={addPlayersStyles.headerGradient}
      >
        <View style={addPlayersStyles.headerRow}>
          {/* Back arrow */}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ paddingRight: spacing.md, justifyContent: 'center' }}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <Text style={addPlayersStyles.headerSubtitle}>Match Setup</Text>
            <Text style={addPlayersStyles.headerTitle}>
              {teamAName || 'Team A'} vs {teamBName || 'Team B'}
            </Text>
          </View>
        </View>
      </LinearGradient>

      {/* CONTENT */}
      <View style={{ padding: spacing.lg }}>
        {/* Toss Winner Selection */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: spacing.md }}>
          Toss won by:
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: spacing.lg }}>
          <TouchableOpacity
            onPress={() => setTossWinner('teamA')}
            style={{
              flex: 1,
              padding: spacing.md,
              marginRight: spacing.sm,
              borderWidth: 1,
              borderColor: tossWinner === 'teamA' ? colors.primary : colors.gray,
              borderRadius: 8,
              backgroundColor: tossWinner === 'teamA' ? colors.primary : 'transparent',
            }}
          >
            <Text style={{ color: tossWinner === 'teamA' ? colors.white : colors.black, textAlign: 'center' }}>
              {teamAName || 'Team A'}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setTossWinner('teamB')}
            style={{
              flex: 1,
              padding: spacing.md,
              marginLeft: 0, // No left margin here to avoid border gaps
              borderWidth: 1,
              borderColor: tossWinner === 'teamB' ? colors.primary : colors.gray,
              borderRadius: 8,
              backgroundColor: tossWinner === 'teamB' ? colors.primary : 'transparent',
            }}
          >
            <Text style={{ color: tossWinner === 'teamB' ? colors.white : colors.black, textAlign: 'center' }}>
              {teamBName || 'Team B'}
            </Text>
          </TouchableOpacity>
        </View>

        {/* Opted To Selection */}
        <Text style={{ fontSize: 18, fontWeight: '600', marginBottom: spacing.md }}>
          Opted to:
        </Text>
        <View style={{ flexDirection: 'row', marginBottom: spacing.lg }}>
          {['Bat', 'Bowl'].map((option, index) => (
            <TouchableOpacity
              key={option}
              onPress={() => setOptedTo(option)}
              style={{
                flex: 1,
                padding: spacing.md,
                marginRight: index === 0 ? spacing.sm : 0, // margin only on first button
                borderWidth: 1,
                borderColor: optedTo === option ? colors.primary : colors.gray,
                borderRadius: 8,
                backgroundColor: optedTo === option ? colors.primary : 'transparent',
              }}
            >
              <Text style={{ color: optedTo === option ? colors.white : colors.black, textAlign: 'center' }}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Summary */}
        {tossWinner && optedTo && (
          <View style={{ marginBottom: spacing.lg }}>
            <Text style={{ fontSize: 18, fontWeight: '600' }}>
              Toss won by {tossWinner === 'teamA' ? (teamAName || 'Team A') : (teamBName || 'Team B')}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: '600', marginTop: spacing.sm }}>
              Opted to {optedTo}
            </Text>
          </View>
        )}

        {/* Spacer to prevent overlap */}
        <View style={{ height: spacing.lg }} />
        <View style={{ height: spacing.lg }} />

        {/* Start Scoring button */}
        <TouchableOpacity
          disabled={!canStart}
          onPress={() => navigation.navigate('OpeningPlayersScreen', { teamAName, teamBName, tossWinner, optedTo })}
          style={[
            addPlayersStyles.startScoringButton,
            !canStart && addPlayersStyles.startScoringButtonDisabled,
            { marginTop: spacing.md, width: '100%' },
          ]}
        >
          <Text style={addPlayersStyles.startScoringButtonText}>Start Scoring</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}