// screens/ProfileScreen.js
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

const { width } = Dimensions.get('window');

const ProfileScreen = () => {
  const menuItems = [
    { title: 'Sports Preferences', icon: 'sports', color: colors.primary },
    { title: 'Favorite Teams', icon: 'star', color: colors.warning },
    { title: 'Notifications', icon: 'notifications-outline', color: colors.secondary },
    { title: 'Privacy & Security', icon: 'shield-outline', color: colors.success },
    { title: 'Help & Support', icon: 'help-circle-outline', color: colors.accent },
  ];

  const achievements = [
    { title: 'Super Fan', icon: 'trophy', color: colors.warning, description: 'Watched 100+ games' },
    { title: 'Commentator', icon: 'chatbubbles', color: colors.primary, description: '500+ comments' },
    { title: 'Streamer', icon: 'videocam', color: colors.success, description: '50+ live streams' },
    { title: 'Predictor', icon: 'analytics', color: colors.secondary, description: '80% accuracy' },
  ];

  const favoriteTeams = [
    { name: 'Lakers', sport: 'Basketball', logo: '🏀', record: '42-18' },
    { name: 'Chiefs', sport: 'Football', logo: '🏈', record: '14-3' },
    { name: 'Yankees', sport: 'Baseball', logo: '⚾', record: '87-75' },
  ];

  const recentActivity = [
    { action: 'Watched', game: 'Lakers vs Warriors', time: '2 hours ago', icon: 'eye' },
    { action: 'Commented on', game: 'Chiefs vs Ravens', time: '5 hours ago', icon: 'chatbubble' },
    { action: 'Streamed', game: 'Yankees vs Red Sox', time: '1 day ago', icon: 'videocam' },
    { action: 'Predicted', game: 'Celtics vs Heat', time: '2 days ago', icon: 'trending-up' },
  ];

  const renderFavoriteTeam = (team, index) => (
    <View key={index} style={styles.teamCard}>
      <Text style={styles.teamLogo}>{team.logo}</Text>
      <View style={styles.teamInfo}>
        <Text style={styles.teamName}>{team.name}</Text>
        <Text style={styles.teamSport}>{team.sport}</Text>
        <Text style={styles.teamRecord}>{team.record}</Text>
      </View>
    </View>
  );

  const renderAchievement = (achievement, index) => (
    <View key={index} style={styles.achievementCard}>
      <View style={[styles.achievementIcon, { backgroundColor: achievement.color }]}>
        <Ionicons name={achievement.icon} size={24} color={colors.white} />
      </View>
      <Text style={styles.achievementTitle}>{achievement.title}</Text>
      <Text style={styles.achievementDesc}>{achievement.description}</Text>
    </View>
  );

  const renderActivity = (activity, index) => (
    <View key={index} style={styles.activityItem}>
      <View style={styles.activityIcon}>
        <Ionicons name={activity.icon} size={16} color={colors.primary} />
      </View>
      <View style={styles.activityContent}>
        <Text style={styles.activityText}>
          <Text style={styles.activityAction}>{activity.action}</Text> {activity.game}
        </Text>
        <Text style={styles.activityTime}>{activity.time}</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={globalStyles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerGradient}
      >
        <View style={styles.profileSection}>
          <View style={styles.avatarContainer}>
            <LinearGradient
              colors={[colors.white, colors.gray200]}
              style={styles.avatar}
            >
              <Ionicons name="person" size={50} color={colors.primary} />
            </LinearGradient>
            <TouchableOpacity style={styles.editButton}>
              <Ionicons name="camera" size={16} color={colors.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Alex Rodriguez</Text>
            <Text style={styles.userEmail}>alex.rodriguez@sportsapp.com</Text>
            <Text style={styles.joinDate}>Sports Fan since Jan 2024</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.editProfileButton}>
          <Text style={styles.editProfileText}>Edit Profile</Text>
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>87</Text>
          <Text style={styles.statLabel}>Games Watched</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>12</Text>
          <Text style={styles.statLabel}>Live Streams</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>234</Text>
          <Text style={styles.statLabel}>Predictions</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>78%</Text>
          <Text style={styles.statLabel}>Accuracy</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Favorite Teams</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.teamsScroll}>
          {favoriteTeams.map(renderFavoriteTeam)}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Achievements</Text>
        <View style={styles.achievementsGrid}>
          {achievements.map(renderAchievement)}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activity</Text>
        <View style={styles.activityCard}>
          {recentActivity.map(renderActivity)}
        </View>
      </View>

      <View style={styles.menuCard}>
        {menuItems.map((item, index) => (
          <TouchableOpacity key={index} style={styles.menuItem}>
            <View style={styles.menuItemLeft}>
              <View style={[styles.menuIconContainer, { backgroundColor: `${item.color}20` }]}>
                <Ionicons name={item.icon} size={20} color={item.color} />
              </View>
              <Text style={styles.menuItemText}>{item.title}</Text>
            </View>
            <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.logoutButton}>
        <LinearGradient
          colors={[colors.danger, '#C0392B']}
          style={styles.logoutGradient}
        >
          <Ionicons name="log-out-outline" size={20} color={colors.white} />
          <Text style={styles.logoutText}>Sign Out</Text>
        </LinearGradient>
      </TouchableOpacity>

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
    borderBottomRightRadius: borderRadius.xl,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.lg,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    ...shadows.base,
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.white,
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.primary,
  },
  userInfo: {
    flex: 1,
    marginLeft: spacing.lg,
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.white,
  },
  userEmail: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.9,
    marginTop: 2,
  },
  joinDate: {
    fontSize: 14,
    color: colors.white,
    opacity: 0.8,
    marginTop: spacing.xs,
  },
  editProfileButton: {
    backgroundColor: colors.white,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.full,
    alignSelf: 'flex-start',
  },
  editProfileText: {
    color: colors.primary,
    fontWeight: '600',
    fontSize: 16,
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginTop: -spacing.lg,
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.lg,
    ...shadows.base,
  },
  statItem: {
    flex: 1,
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
    textAlign: 'center',
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
  teamsScroll: {
    marginHorizontal: -spacing.lg,
    paddingLeft: spacing.lg,
  },
  teamCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    marginRight: spacing.md,
    alignItems: 'center',
    minWidth: 100,
    ...shadows.sm,
  },
  teamLogo: {
    fontSize: 32,
    marginBottom: spacing.sm,
  },
  teamInfo: {
    alignItems: 'center',
  },
  teamName: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  teamSport: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  teamRecord: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: '500',
    marginTop: 2,
  },
  achievementsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.md,
  },
  achievementCard: {
    width: (width - spacing.lg * 2 - spacing.md) / 2,
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    alignItems: 'center',
    ...shadows.sm,
  },
  achievementIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  achievementTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textPrimary,
    textAlign: 'center',
  },
  achievementDesc: {
    fontSize: 12,
    color: colors.textSecondary,
    textAlign: 'center',
    marginTop: spacing.xs,
  },
  activityCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    padding: spacing.base,
    ...shadows.sm,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: spacing.sm,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  activityIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: `${colors.primary}15`,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 14,
    color: colors.textPrimary,
  },
  activityAction: {
    fontWeight: '600',
  },
  activityTime: {
    fontSize: 12,
    color: colors.textSecondary,
    marginTop: 2,
  },
  menuCard: {
    backgroundColor: colors.white,
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray100,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
  menuItemText: {
    fontSize: 16,
    color: colors.textPrimary,
    fontWeight: '500',
  },
  logoutButton: {
    marginHorizontal: spacing.lg,
    marginTop: spacing.xl,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    ...shadows.sm,
  },
  logoutGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
  },
  logoutText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: '600',
    marginLeft: spacing.sm,
  },
};

export default ProfileScreen;