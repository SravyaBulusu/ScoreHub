// screens/LiveScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions, RefreshControl } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

const { width } = Dimensions.get('window');

const LiveScreen = () => {
  const [selectedSport, setSelectedSport] = useState('all');
  const [refreshing, setRefreshing] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const sports = [
    { key: 'all', label: 'All', icon: 'stats-chart' },
    { key: 'basketball', label: 'Basketball', icon: 'basketball' },
    { key: 'football', label: 'Football', icon: 'american-football' },
    { key: 'baseball', label: 'Baseball', icon: 'baseball' },
    { key: 'soccer', label: 'Soccer', icon: 'football' },
    { key: 'hockey', label: 'Hockey', icon: 'disc' },
  ];

  const liveMatches = [
    {
      id: 1,
      sport: 'basketball',
      league: 'NBA',
      homeTeam: { name: 'Lakers', logo: '🏀', score: 89, color: colors.warning },
      awayTeam: { name: 'Warriors', logo: '🏀', score: 92, color: colors.primary },
      quarter: '3rd',
      timeLeft: '7:23',
      status: 'live',
      viewers: 15420,
      isFollowing: true,
      period: 'Q3',
      possession: 'away'
    },
    {
      id: 2,
      sport: 'football',
      league: 'NFL',
      homeTeam: { name: 'Chiefs', logo: '🏈', score: 21, color: colors.danger },
      awayTeam: { name: 'Bills', logo: '🏈', score: 14, color: colors.primary },
      quarter: '2nd',
      timeLeft: '3:45',
      status: 'live',
      viewers: 28930,
      isFollowing: false,
      period: 'Q2',
      possession: 'home'
    },
    {
      id: 3,
      sport: 'soccer',
      league: 'Premier League',
      homeTeam: { name: 'Arsenal', logo: '⚽', score: 2, color: colors.danger },
      awayTeam: { name: 'Chelsea', logo: '⚽', score: 1, color: colors.primary },
      quarter: '2nd Half',
      timeLeft: '67\'',
      status: 'live',
      viewers: 45200,
      isFollowing: true,
      period: '2H',
      possession: 'home'
    },
    {
      id: 4,
      sport: 'baseball',
      league: 'MLB',
      homeTeam: { name: 'Yankees', logo: '⚾', score: 7, color: colors.secondary },
      awayTeam: { name: 'Red Sox', logo: '⚾', score: 4, color: colors.danger },
      quarter: '7th Inning',
      timeLeft: 'Top 7th',
      status: 'live',
      viewers: 12850,
      isFollowing: false,
      period: 'T7',
      possession: 'away'
    },
    {
      id: 5,
      sport: 'basketball',
      league: 'NBA',
      homeTeam: { name: 'Celtics', logo: '🏀', score: 78, color: colors.success },
      awayTeam: { name: 'Heat', logo: '🏀', score: 81, color: colors.danger },
      quarter: '4th',
      timeLeft: '2:15',
      status: 'live',
      viewers: 19240,
      isFollowing: true,
      period: 'Q4',
      possession: 'away'
    },
    {
      id: 6,
      sport: 'hockey',
      league: 'NHL',
      homeTeam: { name: 'Rangers', logo: '🏒', score: 3, color: colors.primary },
      awayTeam: { name: 'Bruins', logo: '🏒', score: 2, color: colors.warning },
      quarter: '3rd Period',
      timeLeft: '12:08',
      status: 'live',
      viewers: 8920,
      isFollowing: false,
      period: 'P3',
      possession: 'home'
    }
  ];

  const upcomingMatches = [
    {
      id: 7,
      sport: 'basketball',
      league: 'NBA',
      homeTeam: { name: 'Nuggets', logo: '🏀' },
      awayTeam: { name: 'Suns', logo: '🏀' },
      startTime: '8:30 PM',
      status: 'upcoming',
      network: 'ESPN'
    },
    {
      id: 8,
      sport: 'football',
      league: 'NFL',
      homeTeam: { name: 'Cowboys', logo: '🏈' },
      awayTeam: { name: 'Giants', logo: '🏈' },
      startTime: '9:15 PM',
      status: 'upcoming',
      network: 'NBC'
    }
  ];

  const featuredMatch = liveMatches[0]; // Featured match for hero section

  const onRefresh = () => {
    setRefreshing(true);
    // Simulate API refresh
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const filteredMatches = selectedSport === 'all' 
    ? liveMatches 
    : liveMatches.filter(match => match.sport === selectedSport);

  const renderSportFilter = (sport) => (
    <TouchableOpacity
      key={sport.key}
      style={[
        styles.sportFilter,
        selectedSport === sport.key && styles.sportFilterActive
      ]}
      onPress={() => setSelectedSport(sport.key)}
    >
      <Ionicons
        name={sport.icon}
        size={18}
        color={selectedSport === sport.key ? colors.white : colors.textSecondary}
      />
      <Text style={[
        styles.sportFilterText,
        selectedSport === sport.key && styles.sportFilterTextActive
      ]}>
        {sport.label}
      </Text>
    </TouchableOpacity>
  );

  const renderFeaturedMatch = () => (
    <TouchableOpacity style={styles.featuredMatchCard}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.featuredGradient}
      >
        <View style={styles.featuredHeader}>
          <View style={styles.liveIndicator}>
            <View style={styles.liveDot} />
            <Text style={styles.liveText}>LIVE</Text>
          </View>
          <Text style={styles.featuredLeague}>{featuredMatch.league}</Text>
        </View>

        <View style={styles.featuredMatchup}>
          <View style={styles.featuredTeam}>
            <Text style={styles.featuredTeamLogo}>{featuredMatch.awayTeam.logo}</Text>
            <Text style={styles.featuredTeamName}>{featuredMatch.awayTeam.name}</Text>
            <Text style={styles.featuredScore}>{featuredMatch.awayTeam.score}</Text>
            {featuredMatch.possession === 'away' && (
              <View style={styles.possessionIndicator} />
            )}
          </View>

          <View style={styles.featuredVs}>
            <Text style={styles.vsText}>VS</Text>
            <Text style={styles.featuredTime}>{featuredMatch.timeLeft}</Text>
            <Text style={styles.featuredPeriod}>{featuredMatch.period}</Text>
          </View>

          <View style={styles.featuredTeam}>
            <Text style={styles.featuredTeamLogo}>{featuredMatch.homeTeam.logo}</Text>
            <Text style={styles.featuredTeamName}>{featuredMatch.homeTeam.name}</Text>
            <Text style={styles.featuredScore}>{featuredMatch.homeTeam.score}</Text>
            {featuredMatch.possession === 'home' && (
              <View style={styles.possessionIndicator} />
            )}
          </View>
        </View>

        <View style={styles.featuredFooter}>
          <View style={styles.viewersInfo}>
            <Ionicons name="eye" size={14} color={colors.white} />
            <Text style={styles.viewersText}>{featuredMatch.viewers.toLocaleString()} watching</Text>
          </View>
          <TouchableOpacity style={styles.watchButton}>
            <Ionicons name="play" size={16} color={colors.primary} />
            <Text style={styles.watchButtonText}>Watch Live</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderLiveMatch = (match, index) => (
    <TouchableOpacity key={match.id} style={styles.matchCard}>
      <View style={styles.matchHeader}>
        <View style={styles.matchLeague}>
          <Text style={styles.leagueText}>{match.league}</Text>
          <View style={styles.liveIndicatorSmall}>
            <View style={styles.liveDotSmall} />
            <Text style={styles.liveTextSmall}>LIVE</Text>
          </View>
        </View>
        <TouchableOpacity 
          style={styles.followButton}
          onPress={() => {
            // Toggle follow logic here
          }}
        >
          <Ionicons 
            name={match.isFollowing ? "heart" : "heart-outline"} 
            size={16} 
            color={match.isFollowing ? colors.danger : colors.textSecondary} 
          />
        </TouchableOpacity>
      </View>

      <View style={styles.matchContent}>
        <View style={styles.teamContainer}>
          <View style={styles.team}>
            <Text style={styles.teamLogo}>{match.awayTeam.logo}</Text>
            <Text style={styles.teamName}>{match.awayTeam.name}</Text>
            {match.possession === 'away' && (
              <View style={styles.possessionIndicatorSmall} />
            )}
          </View>
          <Text style={styles.score}>{match.awayTeam.score}</Text>
        </View>

        <View style={styles.matchInfo}>
          <Text style={styles.timeLeft}>{match.timeLeft}</Text>
          <Text style={styles.period}>{match.quarter}</Text>
        </View>

        <View style={styles.teamContainer}>
          <Text style={styles.score}>{match.homeTeam.score}</Text>
          <View style={styles.team}>
            <Text style={styles.teamLogo}>{match.homeTeam.logo}</Text>
            <Text style={styles.teamName}>{match.homeTeam.name}</Text>
            {match.possession === 'home' && (
              <View style={styles.possessionIndicatorSmall} />
            )}
          </View>
        </View>
      </View>

      <View style={styles.matchFooter}>
        <View style={styles.viewersInfoSmall}>
          <Ionicons name="eye" size={12} color={colors.textSecondary} />
          <Text style={styles.viewersTextSmall}>{match.viewers.toLocaleString()}</Text>
        </View>
        <View style={styles.matchActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="chatbubble-outline" size={14} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="share-outline" size={14} color={colors.primary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.watchButtonSmall}>
            <Ionicons name="play" size={12} color={colors.white} />
            <Text style={styles.watchButtonSmallText}>Watch</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );

  const renderUpcomingMatch = (match, index) => (
    <TouchableOpacity key={match.id} style={styles.upcomingCard}>
      <View style={styles.upcomingHeader}>
        <Text style={styles.upcomingLeague}>{match.league}</Text>
        <Text style={styles.upcomingTime}>{match.startTime}</Text>
      </View>
      <View style={styles.upcomingMatchup}>
        <View style={styles.upcomingTeam}>
          <Text style={styles.upcomingLogo}>{match.awayTeam.logo}</Text>
          <Text style={styles.upcomingName}>{match.awayTeam.name}</Text>
        </View>
        <Text style={styles.upcomingVs}>vs</Text>
        <View style={styles.upcomingTeam}>
          <Text style={styles.upcomingLogo}>{match.homeTeam.logo}</Text>
          <Text style={styles.upcomingName}>{match.homeTeam.name}</Text>
        </View>
      </View>
      <View style={styles.upcomingFooter}>
        <Text style={styles.networkText}>{match.network}</Text>
        <TouchableOpacity style={styles.setReminderButton}>
          <Ionicons name="notifications-outline" size={14} color={colors.primary} />
          <Text style={styles.reminderText}>Remind Me</Text>
        </TouchableOpacity>
      </View>
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
          <Text style={styles.headerTitle}>Live Sports</Text>
          <Text style={styles.headerSubtitle}>
            {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Text>
        </View>
        <View style={styles.liveStats}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{liveMatches.length}</Text>
            <Text style={styles.statLabel}>Live Now</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>{upcomingMatches.length}</Text>
            <Text style={styles.statLabel}>Upcoming</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>
              {liveMatches.reduce((sum, match) => sum + match.viewers, 0).toLocaleString()}
            </Text>
            <Text style={styles.statLabel}>Total Viewers</Text>
          </View>
        </View>
      </LinearGradient>

      <View style={styles.sportFilters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sportFilterContainer}>
            {sports.map(renderSportFilter)}
          </View>
        </ScrollView>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Match</Text>
        {renderFeaturedMatch()}
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Live Matches</Text>
          <TouchableOpacity onPress={onRefresh}>
            <Ionicons name="refresh" size={20} color={colors.primary} />
          </TouchableOpacity>
        </View>
        <View style={styles.matchesList}>
          {filteredMatches.map(renderLiveMatch)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Coming Up Next</Text>
        <View style={styles.upcomingList}>
          {upcomingMatches.map(renderUpcomingMatch)}
        </View>
      </View>

      <View style={{ height: spacing['2xl'] }} />
    </ScrollView>
  );
};

const styles = {
  headerGradient: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['2xl'],
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  headerContent: {
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.white,
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.9,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  liveStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: borderRadius.md,
    paddingVertical: spacing.base,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  statLabel: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.8,
    marginTop: 2,
  },
  sportFilters: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  sportFilterContainer: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  sportFilter: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray200,
    gap: spacing.xs,
  },
  sportFilterActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  sportFilterText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  sportFilterTextActive: {
    color: colors.white,
  },
  featuredSection: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  section: {
    paddingHorizontal: spacing.lg,
    marginTop: spacing.xl,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.base,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  featuredMatchCard: {
    borderRadius: borderRadius.lg,
    overflow: 'hidden',
    ...shadows.base,
  },
  featuredGradient: {
    padding: spacing.lg,
  },
  featuredHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  liveIndicator: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    gap: 4,
  },
  liveDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.danger,
  },
  liveText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
  featuredLeague: {
    fontSize: 14,
    color: colors.white,
    fontWeight: '600',
  },
  featuredMatchup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.lg,
  },
  featuredTeam: {
    flex: 1,
    alignItems: 'center',
    position: 'relative',
  },
  featuredTeamLogo: {
    fontSize: 40,
    marginBottom: spacing.xs,
  },
  featuredTeamName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.white,
    marginBottom: spacing.xs,
  },
  featuredScore: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.white,
  },
  possessionIndicator: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: colors.warning,
  },
  featuredVs: {
    alignItems: 'center',
    marginHorizontal: spacing.lg,
  },
  vsText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    opacity: 0.8,
  },
  featuredTime: {
    fontSize: 14,
    color: colors.white,
    marginTop: spacing.xs,
  },
  featuredPeriod: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.8,
    marginTop: 2,
  },
  featuredFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewersText: {
    fontSize: 12,
    color: colors.white,
    opacity: 0.9,
  },
  watchButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    gap: 4,
  },
  watchButtonText: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  matchesList: {
    gap: spacing.sm,
  },
  matchCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  matchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  matchLeague: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  leagueText: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  liveIndicatorSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.danger,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    gap: 2,
  },
  liveDotSmall: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: colors.white,
  },
  liveTextSmall: {
    fontSize: 8,
    fontWeight: 'bold',
    color: colors.white,
  },
  followButton: {
    padding: 4,
  },
  matchContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  team: {
    alignItems: 'center',
    position: 'relative',
  },
  teamLogo: {
    fontSize: 24,
    marginBottom: 2,
  },
  teamName: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  possessionIndicatorSmall: {
    position: 'absolute',
    top: -2,
    right: -2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.warning,
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginHorizontal: spacing.sm,
  },
  matchInfo: {
    alignItems: 'center',
    marginHorizontal: spacing.base,
  },
  timeLeft: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primary,
  },
  period: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 2,
  },
  matchFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewersInfoSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  viewersTextSmall: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  matchActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  actionButton: {
    padding: 6,
    borderRadius: 16,
    backgroundColor: colors.gray100,
  },
  watchButtonSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primary,
    paddingHorizontal: spacing.sm,
    paddingVertical: 4,
    borderRadius: borderRadius.sm,
    gap: 2,
  },
  watchButtonSmallText: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.white,
  },
  upcomingList: {
    gap: spacing.sm,
  },
  upcomingCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    borderLeftWidth: 3,
    borderLeftColor: colors.secondary,
    ...shadows.sm,
  },
  upcomingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  upcomingLeague: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.textSecondary,
  },
  upcomingTime: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.primary,
  },
  upcomingMatchup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  upcomingTeam: {
    alignItems: 'center',
    flex: 1,
  },
  upcomingLogo: {
    fontSize: 20,
    marginBottom: 2,
  },
  upcomingName: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.textPrimary,
  },
  upcomingVs: {
    fontSize: 12,
    color: colors.textSecondary,
    marginHorizontal: spacing.base,
  },
  upcomingFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  networkText: {
    fontSize: 10,
    color: colors.textSecondary,
    fontWeight: '500',
  },
  setReminderButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
    backgroundColor: colors.gray100,
  },
  reminderText: {
    fontSize: 10,
    fontWeight: '500',
    color: colors.primary,
  },
};

export default LiveScreen;