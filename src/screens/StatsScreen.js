// screens/StatsScreen.js
import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

const { width } = Dimensions.get('window');

const StatsScreen = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('month');
  const [selectedSport, setSelectedSport] = useState('all');

  const timeframes = [
    { key: 'week', label: 'Week' },
    { key: 'month', label: 'Month' },
    { key: 'year', label: 'Year' },
    { key: 'all', label: 'All Time' },
  ];

  const sports = [
    { key: 'all', label: 'All Sports', icon: 'stats-chart' },
    { key: 'basketball', label: 'Basketball', icon: 'basketball' },
    { key: 'football', label: 'Football', icon: 'american-football' },
    { key: 'baseball', label: 'Baseball', icon: 'baseball' },
    { key: 'soccer', label: 'Soccer', icon: 'football' },
  ];

  const overallStats = [
    { title: 'Games Watched', value: '147', change: '+12%', icon: 'eye', color: colors.primary },
    { title: 'Predictions Made', value: '89', change: '+8%', icon: 'trending-up', color: colors.success },
    { title: 'Accuracy Rate', value: '78%', change: '+5%', icon: 'analytics', color: colors.warning },
    { title: 'Hours Streamed', value: '24', change: '+18%', icon: 'videocam', color: colors.secondary },
  ];

  const predictionStats = [
    { sport: 'Basketball', total: 45, correct: 37, accuracy: 82, trend: 'up' },
    { sport: 'Football', total: 28, correct: 21, accuracy: 75, trend: 'up' },
    { sport: 'Baseball', total: 16, correct: 11, accuracy: 69, trend: 'down' },
    { sport: 'Soccer', total: 12, correct: 8, accuracy: 67, trend: 'stable' },
  ];

  const watchingHabits = [
    { day: 'Mon', hours: 2.5, games: 2 },
    { day: 'Tue', hours: 1.8, games: 1 },
    { day: 'Wed', hours: 3.2, games: 3 },
    { day: 'Thu', hours: 2.1, games: 2 },
    { day: 'Fri', hours: 4.5, games: 4 },
    { day: 'Sat', hours: 6.8, games: 6 },
    { day: 'Sun', hours: 5.2, games: 5 },
  ];

  const topTeams = [
    { name: 'Lakers', logo: '🏀', gamesWatched: 23, winRate: 78, sport: 'Basketball' },
    { name: 'Chiefs', logo: '🏈', gamesWatched: 18, winRate: 85, sport: 'Football' },
    { name: 'Yankees', logo: '⚾', gamesWatched: 15, winRate: 62, sport: 'Baseball' },
    { name: 'Barcelona', logo: '⚽', gamesWatched: 12, winRate: 71, sport: 'Soccer' },
  ];

  const achievements = [
    { title: 'Perfect Week', description: '7/7 predictions correct', earned: true, rarity: 'rare' },
    { title: 'Marathon Watcher', description: '10+ hours in a day', earned: true, rarity: 'epic' },
    { title: 'Prediction Master', description: '80%+ accuracy for a month', earned: false, rarity: 'legendary' },
    { title: 'Multi-Sport Fan', description: 'Watch 4 different sports', earned: true, rarity: 'common' },
  ];

  const monthlyData = [
    { month: 'Jan', predictions: 12, accuracy: 75, gamesWatched: 18 },
    { month: 'Feb', predictions: 15, accuracy: 73, gamesWatched: 22 },
    { month: 'Mar', predictions: 18, accuracy: 78, gamesWatched: 25 },
    { month: 'Apr', predictions: 21, accuracy: 81, gamesWatched: 28 },
    { month: 'May', predictions: 23, accuracy: 78, gamesWatched: 31 },
  ];

  const renderTimeframeButton = (timeframe) => (
    <TouchableOpacity
      key={timeframe.key}
      style={[
        styles.timeframeButton,
        selectedTimeframe === timeframe.key && styles.timeframeButtonActive
      ]}
      onPress={() => setSelectedTimeframe(timeframe.key)}
    >
      <Text style={[
        styles.timeframeText,
        selectedTimeframe === timeframe.key && styles.timeframeTextActive
      ]}>
        {timeframe.label}
      </Text>
    </TouchableOpacity>
  );

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
        size={20}
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

  const renderOverallStat = (stat, index) => (
    <View key={index} style={styles.overallStatCard}>
      <View style={[styles.statIcon, { backgroundColor: `${stat.color}20` }]}>
        <Ionicons name={stat.icon} size={24} color={stat.color} />
      </View>
      <View style={styles.statContent}>
        <Text style={styles.statValue}>{stat.value}</Text>
        <Text style={styles.statTitle}>{stat.title}</Text>
        <View style={styles.statChange}>
          <Ionicons
            name={stat.change.startsWith('+') ? 'trending-up' : 'trending-down'}
            size={12}
            color={stat.change.startsWith('+') ? colors.success : colors.danger}
          />
          <Text style={[
            styles.statChangeText,
            { color: stat.change.startsWith('+') ? colors.success : colors.danger }
          ]}>
            {stat.change}
          </Text>
        </View>
      </View>
    </View>
  );

  const renderPredictionStat = (stat, index) => (
    <View key={index} style={styles.predictionCard}>
      <View style={styles.predictionHeader}>
        <Text style={styles.predictionSport}>{stat.sport}</Text>
        <View style={styles.trendIndicator}>
          <Ionicons
            name={
              stat.trend === 'up' ? 'trending-up' :
              stat.trend === 'down' ? 'trending-down' : 'remove'
            }
            size={16}
            color={
              stat.trend === 'up' ? colors.success :
              stat.trend === 'down' ? colors.danger : colors.textSecondary
            }
          />
        </View>
      </View>
      <View style={styles.predictionStats}>
        <View style={styles.predictionStatItem}>
          <Text style={styles.predictionStatValue}>{stat.correct}/{stat.total}</Text>
          <Text style={styles.predictionStatLabel}>Correct</Text>
        </View>
        <View style={styles.predictionAccuracy}>
          <Text style={styles.accuracyPercentage}>{stat.accuracy}%</Text>
          <View style={styles.accuracyBar}>
            <View style={[styles.accuracyFill, { width: `${stat.accuracy}%` }]} />
          </View>
        </View>
      </View>
    </View>
  );

  const renderWatchingHabit = (habit, index) => {
    const maxHours = Math.max(...watchingHabits.map(h => h.hours));
    const barHeight = (habit.hours / maxHours) * 80;
    
    return (
      <View key={index} style={styles.habitDay}>
        <View style={styles.habitBar}>
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={[styles.habitBarFill, { height: barHeight }]}
          />
        </View>
        <Text style={styles.habitHours}>{habit.hours}h</Text>
        <Text style={styles.habitDayLabel}>{habit.day}</Text>
      </View>
    );
  };

  const renderTopTeam = (team, index) => (
    <View key={index} style={styles.topTeamCard}>
      <View style={styles.topTeamHeader}>
        <Text style={styles.topTeamLogo}>{team.logo}</Text>
        <View style={styles.topTeamInfo}>
          <Text style={styles.topTeamName}>{team.name}</Text>
          <Text style={styles.topTeamSport}>{team.sport}</Text>
        </View>
        <Text style={styles.topTeamRank}>#{index + 1}</Text>
      </View>
      <View style={styles.topTeamStats}>
        <View style={styles.topTeamStat}>
          <Text style={styles.topTeamStatValue}>{team.gamesWatched}</Text>
          <Text style={styles.topTeamStatLabel}>Games</Text>
        </View>
        <View style={styles.topTeamStat}>
          <Text style={styles.topTeamStatValue}>{team.winRate}%</Text>
          <Text style={styles.topTeamStatLabel}>Win Rate</Text>
        </View>
      </View>
    </View>
  );

  const renderAchievement = (achievement, index) => (
    <View key={index} style={[
      styles.achievementCard,
      !achievement.earned && styles.achievementCardLocked
    ]}>
      <View style={[
        styles.achievementIcon,
        { backgroundColor: achievement.earned ? colors.warning : colors.gray200 }
      ]}>
        <Ionicons
          name={achievement.earned ? 'trophy' : 'lock-closed'}
          size={20}
          color={achievement.earned ? colors.white : colors.textSecondary}
        />
      </View>
      <View style={styles.achievementInfo}>
        <Text style={[
          styles.achievementTitle,
          !achievement.earned && styles.achievementTitleLocked
        ]}>
          {achievement.title}
        </Text>
        <Text style={styles.achievementDesc}>{achievement.description}</Text>
        <View style={[
          styles.rarityBadge,
          {
            backgroundColor:
              achievement.rarity === 'legendary' ? colors.warning :
              achievement.rarity === 'epic' ? colors.secondary :
              achievement.rarity === 'rare' ? colors.success : colors.primary
          }
        ]}>
          <Text style={styles.rarityText}>{achievement.rarity.toUpperCase()}</Text>
        </View>
      </View>
    </View>
  );

  const renderMonthlyChart = () => {
    const maxValue = Math.max(...monthlyData.map(d => Math.max(d.predictions, d.gamesWatched)));
    
    return (
      <View style={styles.chartContainer}>
        <View style={styles.chartHeader}>
          <Text style={styles.chartTitle}>Monthly Trends</Text>
          <View style={styles.chartLegend}>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.primary }]} />
              <Text style={styles.legendText}>Predictions</Text>
            </View>
            <View style={styles.legendItem}>
              <View style={[styles.legendDot, { backgroundColor: colors.secondary }]} />
              <Text style={styles.legendText}>Games Watched</Text>
            </View>
          </View>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.chartScroll}>
          <View style={styles.chart}>
            {monthlyData.map((data, index) => (
              <View key={index} style={styles.chartColumn}>
                <View style={styles.chartBars}>
                  <View
                    style={[
                      styles.chartBar,
                      styles.chartBarPrimary,
                      { height: (data.predictions / maxValue) * 100 }
                    ]}
                  />
                  <View
                    style={[
                      styles.chartBar,
                      styles.chartBarSecondary,
                      { height: (data.gamesWatched / maxValue) * 100 }
                    ]}
                  />
                </View>
                <Text style={styles.chartLabel}>{data.month}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  };

  return (
    <ScrollView style={globalStyles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>Statistics</Text>
        <Text style={styles.headerSubtitle}>Track your sports engagement</Text>
      </LinearGradient>

      <View style={styles.timeframeContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.timeframeButtons}>
            {timeframes.map(renderTimeframeButton)}
          </View>
        </ScrollView>
      </View>

      <View style={styles.sportFilters}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.sportFilterContainer}>
            {sports.map(renderSportFilter)}
          </View>
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Overall Performance</Text>
        <View style={styles.overallStatsGrid}>
          {overallStats.map(renderOverallStat)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Prediction Accuracy</Text>
        <View style={styles.predictionGrid}>
          {predictionStats.map(renderPredictionStat)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Weekly Watching Habits</Text>
        <View style={styles.habitChart}>
          {watchingHabits.map(renderWatchingHabit)}
        </View>
      </View>

      {renderMonthlyChart()}

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top Teams</Text>
        <View style={styles.topTeamsContainer}>
          {topTeams.map(renderTopTeam)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsContainer}>
          {achievements.map(renderAchievement)}
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
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.x1,
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
  timeframeContainer: {
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  timeframeButtons: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  timeframeButton: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.full,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.gray200,
  },
  timeframeButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  timeframeText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  timeframeTextActive: {
    color: colors.white,
  },
  sportFilters: {
    marginTop: spacing.base,
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
  overallStatsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  overallStatCard: {
    width: (width - spacing.lg * 2 - spacing.sm) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  statContent: {
    flex: 1,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  statTitle: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  statChange: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing.xs,
    gap: 2,
  },
  statChangeText: {
    fontSize: 12,
    fontWeight: '500',
  },
  predictionGrid: {
    gap: spacing.sm,
  },
  predictionCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  predictionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.sm,
  },
  predictionSport: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  trendIndicator: {
    padding: 4,
    borderRadius: 12,
    backgroundColor: colors.gray100,
  },
  predictionStats: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  predictionStatItem: {
    alignItems: 'center',
  },
  predictionStatValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  predictionStatLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  predictionAccuracy: {
    flex: 1,
    marginLeft: spacing.base,
  },
  accuracyPercentage: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
    textAlign: 'right',
  },
  accuracyBar: {
    height: 6,
    backgroundColor: colors.gray200,
    borderRadius: 3,
    marginTop: spacing.xs,
  },
  accuracyFill: {
    height: '100%',
    backgroundColor: colors.success,
    borderRadius: 3,
  },
  habitChart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: spacing.base,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  habitDay: {
    flex: 1,
    alignItems: 'center',
  },
  habitBar: {
    width: 24,
    height: 80,
    backgroundColor: colors.gray100,
    borderRadius: 12,
    justifyContent: 'flex-end',
    overflow: 'hidden',
  },
  habitBarFill: {
    width: '100%',
    borderRadius: 12,
  },
  habitHours: {
    fontSize: 10,
    fontWeight: '600',
    color: colors.textPrimary,
    marginTop: spacing.xs,
  },
  habitDayLabel: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  chartContainer: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  chartHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: spacing.base,
  },
  chartTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  chartLegend: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  chartScroll: {
    marginHorizontal: -spacing.base,
  },
  chart: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: spacing.sm,
    paddingHorizontal: spacing.base,
  },
  chartColumn: {
    alignItems: 'center',
  },
  chartBars: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: 2,
    marginBottom: spacing.xs,
  },
  chartBar: {
    width: 12,
    borderRadius: 6,
    minHeight: 4,
  },
  chartBarPrimary: {
    backgroundColor: colors.primary,
  },
  chartBarSecondary: {
    backgroundColor: colors.secondary,
  },
  chartLabel: {
    fontSize: 10,
    color: colors.textSecondary,
  },
  topTeamsContainer: {
    gap: spacing.sm,
  },
  topTeamCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  topTeamHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.sm,
  },
  topTeamLogo: {
    fontSize: 32,
    marginRight: spacing.sm,
  },
  topTeamInfo: {
    flex: 1,
  },
  topTeamName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  topTeamSport: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  topTeamRank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.primary,
  },
  topTeamStats: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  topTeamStat: {
    alignItems: 'center',
  },
  topTeamStatValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.textPrimary,
  },
  topTeamStatLabel: {
    fontSize: 10,
    color: colors.textSecondary,
    marginTop: 2,
  },
  achievementsContainer: {
    gap: spacing.sm,
  },
  achievementCard: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    alignItems: 'center',
    ...shadows.sm,
  },
  achievementCardLocked: {
    opacity: 0.6,
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  achievementInfo: {
    flex: 1,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  achievementTitleLocked: {
    color: colors.textSecondary,
  },
  achievementDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  rarityBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.xs,
    paddingVertical: 2,
    borderRadius: 4,
    marginTop: spacing.xs,
  },
  rarityText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: colors.white,
  },
};

export default StatsScreen;