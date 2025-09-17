import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, spacing } from '../themes/globalStyles';

export default function ScoringScreen({ route, navigation }) {
  const { 
    teamAName, 
    teamBName, 
    tossWinner, 
    optedTo,
    striker,
    nonStriker,
    openingBowler
  } = route.params || {};

  // Game state
  const [totalRuns, setTotalRuns] = useState(9);
  const [wickets, setWickets] = useState(0);
  const [overs, setOvers] = useState(0);
  const [balls, setBalls] = useState(4);
  const [currentStriker, setCurrentStriker] = useState(striker || 'P1');
  const [currentNonStriker, setCurrentNonStriker] = useState(nonStriker || 'P2');
  const [currentBowler, setCurrentBowler] = useState(openingBowler || 'Bowler');

  // Checkbox states
  const [isWide, setIsWide] = useState(false);
  const [isNoBall, setIsNoBall] = useState(false);
  const [isByes, setIsByes] = useState(false);
  const [isLegByes, setIsLegByes] = useState(false);
  const [isWicket, setIsWicket] = useState(false);

  // Sample data to match the reference
  const [thisOverBalls] = useState([3, 1, 2, 4, 0, 6]);

  const formatOvers = (overs, balls) => {
    return `${overs}.${balls}`;
  };

  const handleRunScored = (runs) => {
    // Your scoring logic here
    console.log(`Scored ${runs} runs`);
  };

  const resetExtras = () => {
    setIsWide(false);
    setIsNoBall(false);
    setIsByes(false);
    setIsLegByes(false);
    setIsWicket(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.header}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>A v/s B</Text>
          <View style={styles.headerActions}>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="create-outline" size={24} color={colors.white} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.headerIcon}>
              <Ionicons name="chatbubble-outline" size={24} color={colors.white} />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <ScrollView style={styles.content}>
        {/* Score Section */}
        <View style={styles.scoreSection}>
          <View style={styles.scoreHeader}>
            <Text style={styles.teamName}>a, 1st innings</Text>
            <Text style={styles.crrLabel}>CRR</Text>
          </View>
          <View style={styles.scoreDisplay}>
            <Text style={styles.mainScore}>
              9 - 0 <Text style={styles.oversText}>(0.4)</Text>
            </Text>
            <Text style={styles.crr}>13.50</Text>
          </View>
        </View>

        {/* Batsmen Stats Table */}
        <View style={styles.statsTable}>
          <View style={styles.statsHeader}>
            <Text style={[styles.statsHeaderText, { flex: 2 }]}>Batsman</Text>
            <Text style={styles.statsHeaderText}>R</Text>
            <Text style={styles.statsHeaderText}>B</Text>
            <Text style={styles.statsHeaderText}>4s</Text>
            <Text style={styles.statsHeaderText}>6s</Text>
            <Text style={styles.statsHeaderText}>SR</Text>
          </View>
          
          <View style={styles.statsRow}>
            <Text style={[styles.playerName, { flex: 2 }]}>P1*</Text>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statValue}>166.67</Text>
          </View>
          
          <View style={styles.statsRow}>
            <Text style={[styles.playerName, { flex: 2 }]}>P2</Text>
            <Text style={styles.statValue}>1</Text>
            <Text style={styles.statValue}>3</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statValue}>33.33</Text>
          </View>
        </View>

        {/* Bowler Stats Table */}
        <View style={styles.statsTable}>
          <View style={styles.statsHeader}>
            <Text style={[styles.statsHeaderText, { flex: 2 }]}>Bowler</Text>
            <Text style={styles.statsHeaderText}>O</Text>
            <Text style={styles.statsHeaderText}>M</Text>
            <Text style={styles.statsHeaderText}>R</Text>
            <Text style={styles.statsHeaderText}>W</Text>
            <Text style={styles.statsHeaderText}>ER</Text>
          </View>
          
          <View style={styles.statsRow}>
            <Text style={[styles.playerName, { flex: 2 }]}>Bowler</Text>
            <Text style={styles.statValue}>0.4</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statValue}>9</Text>
            <Text style={styles.statValue}>0</Text>
            <Text style={styles.statValue}>13.50</Text>
          </View>
        </View>

        {/* This Over Section */}
        <View style={styles.thisOverSection}>
          <View style={styles.thisOverHeader}>
            <Text style={styles.thisOverTitle}>This over:</Text>
            <View style={styles.thisOverBalls}>
              {thisOverBalls.map((ball, index) => (
                <View key={index} style={styles.ballCircle}>
                  <Text style={styles.ballText}>{ball}</Text>
                </View>
              ))}
            </View>
          </View>
          <Text style={styles.thisOverRuns}>NB: 205</Text>
        </View>

        {/* Checkboxes and Action Buttons Row */}
        <View style={styles.controlsSection}>
          {/* Left side - Checkboxes */}
          <View style={styles.checkboxSection}>
            {[
              { label: 'Wide', state: isWide, setter: setIsWide },
              { label: 'No-ball', state: isNoBall, setter: setIsNoBall },
              { label: 'Byes', state: isByes, setter: setIsByes },
              { label: 'Leg byes', state: isLegByes, setter: setIsLegByes },
              { label: 'Wicket', state: isWicket, setter: setIsWicket }
            ].map((extra, index) => (
              <TouchableOpacity
                key={extra.label}
                style={styles.checkboxContainer}
                onPress={() => extra.setter(!extra.state)}
              >
                <View style={[styles.checkbox, extra.state && styles.checkboxChecked]}>
                  {extra.state && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>{extra.label}</Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Right side - Action buttons */}
          <View style={styles.actionButtonsSection}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Retire</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Swap Batsman</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom Action Buttons Row */}
        <View style={styles.bottomActionsSection}>
          <TouchableOpacity style={styles.bottomActionButton}>
            <Text style={styles.bottomActionButtonText}>Undo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomActionButton}>
            <Text style={styles.bottomActionButtonText}>Partnership</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomActionButton}>
            <Text style={styles.bottomActionButtonText}>Extras</Text>
          </TouchableOpacity>
        </View>

        {/* Run Scoring Buttons Grid */}
        <View style={styles.runButtonsGrid}>
          {[0, 1, 2, 3, 4, 5, 6, '...'].map((run, index) => (
            <TouchableOpacity
              key={index}
              style={styles.runButton}
              onPress={() => handleRunScored(run)}
            >
              <Text style={styles.runButtonText}>{run}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: spacing.md,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '600',
    color: colors.white,
    marginHorizontal: spacing.md,
  },
  headerActions: {
    flexDirection: 'row',
  },
  headerIcon: {
    padding: 8,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scoreSection: {
    backgroundColor: colors.white,
    padding: spacing.md,
    marginBottom: 2,
  },
  scoreHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 14,
    color: '#666',
  },
  crrLabel: {
    fontSize: 14,
    color: '#666',
  },
  scoreDisplay: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainScore: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.black,
  },
  oversText: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#666',
  },
  crr: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
  statsTable: {
    backgroundColor: colors.white,
    marginBottom: 2,
  },
  statsHeader: {
    flexDirection: 'row',
    backgroundColor: '#f8f8f8',
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  statsHeaderText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    textAlign: 'center',
    width: 45,
  },
  statsRow: {
    flexDirection: 'row',
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
    alignItems: 'center',
  },
  playerName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.black,
  },
  statValue: {
    fontSize: 16,
    color: colors.black,
    textAlign: 'center',
    width: 45,
  },
  thisOverSection: {
    backgroundColor: colors.white,
    padding: spacing.md,
    marginBottom: 2,
  },
  thisOverHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  thisOverTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.black,
    marginRight: 15,
  },
  thisOverBalls: {
    flexDirection: 'row',
    flex: 1,
  },
  ballCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  ballText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.black,
  },
  thisOverRuns: {
    fontSize: 14,
    color: '#666',
  },
  controlsSection: {
    backgroundColor: colors.white,
    padding: spacing.md,
    marginBottom: 2,
    flexDirection: 'row',
  },
  checkboxSection: {
    flex: 2,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 4,
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmark: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 14,
    color: colors.black,
  },
  actionButtonsSection: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 6,
    marginBottom: 8,
    minWidth: 100,
    alignItems: 'center',
  },
  actionButtonText: {
    color: colors.white,
    fontSize: 13,
    fontWeight: '600',
  },
  bottomActionsSection: {
    backgroundColor: colors.white,
    padding: spacing.md,
    marginBottom: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bottomActionButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 6,
    flex: 1,
    marginHorizontal: 4,
    alignItems: 'center',
  },
  bottomActionButtonText: {
    color: colors.white,
    fontSize: 14,
    fontWeight: '600',
  },
  runButtonsGrid: {
    backgroundColor: colors.white,
    padding: spacing.md,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  runButton: {
    width: '22%',
    aspectRatio: 1,
    backgroundColor: colors.white,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    borderWidth: 2,
    borderColor: '#ddd',
  },
  runButtonText: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.black,
  },
});