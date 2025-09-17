// screens/HomeScreen.js
import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  RefreshControl,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

const { width } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [liveGames, setLiveGames] = useState([
    {
      id: '1',
      homeTeam: 'Lakers',
      awayTeam: 'Warriors',
      homeScore: 108,
      awayScore: 95,
      quarter: '4th',
      timeLeft: '2:45',
      status: 'live',
      sport: 'basketball'
    },
    {
      id: '2',
      homeTeam: 'Chiefs',
      awayTeam: 'Ravens',
      homeScore: 21,
      awayScore: 14,
      quarter: '3rd',
      timeLeft: '8:32',
      status: 'live',
      sport: 'football'
    }
  ]);

  const [upcomingGames, setUpcomingGames] = useState([
    {
      id: '3',
      homeTeam: 'Celtics',
      awayTeam: 'Heat',
      startTime: '8:00 PM',
      date: 'Tonight',
      status: 'scheduled',
      sport: 'basketball'
    },
    {
      id: '4',
      homeTeam: 'Cowboys',
      awayTeam: 'Giants',
      startTime: '1:00 PM',
      date: 'Sunday',
      status: 'scheduled',
      sport: 'football'
    }
  ]);

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API call
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  const getSportIcon = (sport) => {
    switch (sport) {
      case 'basketball': return 'basketball';
      case 'football': return 'american-football';
      case 'soccer': return 'football';
      default: return 'trophy';
    }
  };

  const handleNewGame = () => {
    // Navigate to add game screen (you can implement this later)
    // console.log('Navigate to Add Game');
    navigation.navigate('NewGame');
  };

  const handleNewTournament = () => {
    // Navigate to add tournament screen
    navigation.navigate('AddTournament');
  };

  const handleResults = () => {
    // Navigate to results screen (you can implement this later)
    console.log('Navigate to Results');
  };

  const renderLiveGame = (game) => (
    <TouchableOpacity key={game.id} style={styles.liveGameCard}>
      <LinearGradient
        colors={['rgba(255, 107, 53, 0.1)', 'rgba(255, 107, 53, 0.05)']}
        style={styles.liveGameGradient}
      >
        <View style={styles.liveIndicator}>
          <View style={styles.liveDot} />
          <Text style={styles.liveText}>LIVE</Text>
        </View>
        
        <View style={styles.gameHeader}>
          <Ionicons name={getSportIcon(game.sport)} size={20} color={colors.primary} />
          <Text style={styles.gameTime}>{game.quarter} • {game.timeLeft}</Text>
        </View>

        <View style={styles.matchup}>
          <View style={styles.teamSection}>
            <Text style={styles.teamName}>{game.awayTeam}</Text>
            <Text style={styles.teamScore}>{game.awayScore}</Text>
          </View>
          
          <View style={styles.vsSection}>
            <Text style={styles.vsText}>VS</Text>
          </View>
          
          <View style={styles.teamSection}>
            <Text style={styles.teamName}>{game.homeTeam}</Text>
            <Text style={styles.teamScore}>{game.homeScore}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderUpcomingGame = (game) => (
    <TouchableOpacity key={game.id} style={styles.upcomingGameCard}>
      <View style={styles.gameInfo}>
        <Ionicons name={getSportIcon(game.sport)} size={18} color={colors.secondary} />
        <View style={styles.gameDetails}>
          <Text style={styles.upcomingTeams}>{game.awayTeam} @ {game.homeTeam}</Text>
          <Text style={styles.upcomingTime}>{game.date} • {game.startTime}</Text>
        </View>
      </View>
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </TouchableOpacity>
  );

  return (
    <ScrollView 
      style={globalStyles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <View>
            <Text style={styles.welcomeText}>Welcome Back!</Text>
            <Text style={styles.headerTitle}>Live Sports</Text>
          </View>
          <TouchableOpacity style={styles.notificationButton}>
            <Ionicons name="notifications" size={24} color={colors.white} />
            <View style={styles.notificationBadge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>

      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={handleNewGame}>
          <LinearGradient
            colors={[colors.success, '#27AE60']}
            style={styles.actionGradient}
          >
            <Ionicons name="add-circle" size={28} color={colors.white} />
          </LinearGradient>
          <Text style={styles.actionText}>New Game</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleNewTournament}>
          <LinearGradient
            colors={[colors.accent, '#3498DB']}
            style={styles.actionGradient}
          >
            <Ionicons name="calendar" size={28} color={colors.white} />
          </LinearGradient>
          <Text style={styles.actionText}>New Tournament</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton} onPress={handleResults}>
          <LinearGradient
            colors={[colors.warning, '#E67E22']}
            style={styles.actionGradient}
          >
            <Ionicons name="trophy" size={28} color={colors.white} />
          </LinearGradient>
          <Text style={styles.actionText}>My Games</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Live Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        {liveGames.length > 0 ? (
          liveGames.map(renderLiveGame)
        ) : (
          <View style={styles.emptyState}>
            <Ionicons name="sports" size={48} color={colors.textMuted} />
            <Text style={styles.emptyText}>No live games at the moment</Text>
          </View>
        )}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Upcoming Games</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.upcomingList}>
          {upcomingGames.map(renderUpcomingGame)}
        </View>
      </View>

      <View style={styles.statsPreview}>
        <Text style={styles.sectionTitle}>Quick Stats</Text>
        <View style={styles.statsRow}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>24</Text>
            <Text style={styles.statLabel}>Games Today</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>8</Text>
            <Text style={styles.statLabel}>Live Now</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>156</Text>
            <Text style={styles.statLabel}>This Week</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = {
  headerGradient: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['2xl'],
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.9,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    marginTop: 4,
  },
  notificationButton: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    top: -4,
    right: -4,
    backgroundColor: colors.danger,
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  actionButton: {
    alignItems: 'center',
  },
  actionGradient: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    ...shadows.base,
  },
  actionText: {
    marginTop: spacing.sm,
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginBottom: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.base,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: '600',
  },
  liveGameCard: {
    marginBottom: spacing.base,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    ...shadows.base,
  },
  liveGameGradient: {
    backgroundColor: colors.white,
    padding: spacing.lg,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: colors.danger,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
    borderRadius: borderRadius.sm,
    marginBottom: spacing.md,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.white,
    marginRight: spacing.xs,
  },
  liveText: {
    color: colors.white,
    fontSize: 10,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  gameHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  gameTime: {
    fontSize: 14,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  matchup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teamSection: {
    flex: 1,
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  teamScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.primary,
  },
  vsSection: {
    paddingHorizontal: spacing.lg,
  },
  vsText: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
  },
  upcomingList: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  upcomingGameCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  gameInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  gameDetails: {
    marginLeft: spacing.md,
  },
  upcomingTeams: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  upcomingTime: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },
  emptyState: {
    alignItems: 'center',
    paddingVertical: spacing['2xl'],
  },
  emptyText: {
    fontSize: 16,
    color: colors.textMuted,
    marginTop: spacing.md,
  },
  statsPreview: {
    backgroundColor: colors.white,
    margin: spacing.lg,
    padding: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.base,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: spacing.base,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.primary,
  },
  statLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
};

export default HomeScreen;