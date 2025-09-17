// screens/DiscoverScreen.js
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  FlatList, 
  TouchableOpacity, 
  TextInput,
  ScrollView,
  Dimensions 
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors, globalStyles, spacing, borderRadius, shadows, typography } from '../themes/globalStyles';

const { width } = Dimensions.get('window');

const DiscoverScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const sportsCategories = [
    { 
      id: 'basketball', 
      name: 'Basketball', 
      icon: 'basketball', 
      color: '#FF6B35',
      gradient: ['#FF6B35', '#F7931E'],
      games: 24,
      description: 'NBA, College & International'
    },
    { 
      id: 'football', 
      name: 'Football', 
      icon: 'american-football', 
      color: '#004E89',
      gradient: ['#004E89', '#1B1464'],
      games: 16,
      description: 'NFL, College & High School'
    },
    { 
      id: 'soccer', 
      name: 'Soccer', 
      icon: 'football', 
      color: '#00A8CC',
      gradient: ['#00A8CC', '#0077B6'],
      games: 32,
      description: 'Premier League, MLS & More'
    },
    { 
      id: 'baseball', 
      name: 'Baseball', 
      icon: 'baseball', 
      color: '#2ECC71',
      gradient: ['#2ECC71', '#27AE60'],
      games: 28,
      description: 'MLB, Minor League & College'
    },
    { 
      id: 'hockey', 
      name: 'Hockey', 
      icon: 'disc', 
      color: '#9B59B6',
      gradient: ['#9B59B6', '#8E44AD'],
      games: 18,
      description: 'NHL, College & Junior'
    },
    { 
      id: 'tennis', 
      name: 'Tennis', 
      icon: 'tennisball', 
      color: '#E74C3C',
      gradient: ['#E74C3C', '#C0392B'],
      games: 12,
      description: 'ATP, WTA & Grand Slams'
    },
  ];

  const trendingSports = [
    { name: 'March Madness', icon: 'basketball', trend: '+45%' },
    { name: 'NFL Playoffs', icon: 'american-football', trend: '+32%' },
    { name: 'World Cup', icon: 'football', trend: '+78%' },
    { name: 'Olympics', icon: 'medal', trend: '+92%' },
  ];

  const featuredLeagues = [
    {
      id: '1',
      name: 'NBA Finals',
      sport: 'basketball',
      status: 'Live',
      viewers: '2.1M',
      image: '🏀'
    },
    {
      id: '2',
      name: 'Premier League',
      sport: 'soccer',
      status: 'Today',
      viewers: '856K',
      image: '⚽'
    },
    {
      id: '3',
      name: 'NFL Conference',
      sport: 'football',
      status: 'Tomorrow',
      viewers: '1.8M',
      image: '🏈'
    },
  ];

  const renderSportCategory = ({ item }) => (
    <TouchableOpacity
      style={styles.categoryCard}
      onPress={() => setSelectedCategory(item.id)}
    >
      <LinearGradient
        colors={item.gradient}
        style={styles.categoryGradient}
      >
        <View style={styles.categoryHeader}>
          <Ionicons name={item.icon} size={32} color={colors.white} />
          <View style={styles.gamesCount}>
            <Text style={styles.gamesCountText}>{item.games}</Text>
          </View>
        </View>
        
        <View style={styles.categoryContent}>
          <Text style={styles.categoryName}>{item.name}</Text>
          <Text style={styles.categoryDescription}>{item.description}</Text>
        </View>
        
        <View style={styles.categoryFooter}>
          <Text style={styles.viewGamesText}>View Games</Text>
          <Ionicons name="arrow-forward" size={16} color={colors.white} />
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );

  const renderTrendingItem = (item, index) => (
    <TouchableOpacity key={index} style={styles.trendingItem}>
      <View style={styles.trendingLeft}>
        <View style={styles.trendingIcon}>
          <Ionicons name={item.icon} size={20} color={colors.primary} />
        </View>
        <Text style={styles.trendingName}>{item.name}</Text>
      </View>
      <View style={styles.trendingRight}>
        <Text style={styles.trendingPercent}>{item.trend}</Text>
        <Ionicons name="trending-up" size={16} color={colors.success} />
      </View>
    </TouchableOpacity>
  );

  const renderFeaturedLeague = (league) => (
    <TouchableOpacity key={league.id} style={styles.featuredCard}>
      <View style={styles.featuredImage}>
        <Text style={styles.featuredEmoji}>{league.image}</Text>
      </View>
      
      <View style={styles.featuredContent}>
        <Text style={styles.featuredName}>{league.name}</Text>
        <View style={styles.featuredMeta}>
          <View style={[styles.statusBadge, 
            league.status === 'Live' && styles.statusLive,
            league.status === 'Today' && styles.statusToday
          ]}>
            <Text style={styles.statusText}>{league.status}</Text>
          </View>
          <View style={styles.viewersContainer}>
            <Ionicons name="eye" size={14} color={colors.textSecondary} />
            <Text style={styles.viewersText}>{league.viewers}</Text>
          </View>
        </View>
      </View>
      
      <Ionicons name="chevron-forward" size={20} color={colors.textMuted} />
    </TouchableOpacity>
  );

  return (
    <ScrollView style={globalStyles.container}>
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerGradient}
      >
        <Text style={styles.headerTitle}>Discover Sports</Text>
        <Text style={styles.headerSubtitle}>Find your favorite games and leagues</Text>
        
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color={colors.textMuted} style={styles.searchIcon} />
          <TextInput
            style={styles.searchInput}
            placeholder="Search sports, teams, or leagues..."
            placeholderTextColor={colors.textMuted}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity onPress={() => setSearchQuery('')}>
              <Ionicons name="close-circle" size={20} color={colors.textMuted} />
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Sports Categories</Text>
        <FlatList
          data={sportsCategories}
          renderItem={renderSportCategory}
          keyExtractor={(item) => item.id}
          numColumns={2}
          columnWrapperStyle={styles.categoryRow}
          showsVerticalScrollIndicator={false}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Trending Now</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.trendingContainer}>
          {trendingSports.map(renderTrendingItem)}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Featured Leagues</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.featuredContainer}>
          {featuredLeagues.map(renderFeaturedLeague)}
        </View>
      </View>

      <View style={styles.quickFilters}>
        <Text style={styles.sectionTitle}>Quick Filters</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filtersScroll}>
          {['All Sports', 'Live Now', 'Today', 'This Week', 'Favorites'].map((filter, index) => (
            <TouchableOpacity key={index} style={[styles.filterChip, index === 0 && styles.filterChipActive]}>
              <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerGradient: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing['2xl'],
    paddingBottom: spacing.xl,
    borderBottomLeftRadius: borderRadius.xl,
    borderBottomRightRadius: borderRadius.xl,
  },
  headerTitle: {
    fontSize: typography.sizes['3xl'],
    fontWeight: typography.weights.bold,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  headerSubtitle: {
    fontSize: typography.sizes.base,
    color: colors.white,
    opacity: 0.9,
    marginBottom: spacing.lg,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: borderRadius.xl,
    paddingHorizontal: spacing.base,
    height: 50,
    ...shadows.sm,
  },
  searchIcon: {
    marginRight: spacing.sm,
  },
  searchInput: {
    flex: 1,
    fontSize: typography.sizes.base,
    color: colors.textPrimary,
  },
  section: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xl,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.base,
  },
  sectionTitle: {
    fontSize: typography.sizes.xl,
    fontWeight: typography.weights.bold,
    color: colors.textPrimary,
  },
  seeAllText: {
    fontSize: typography.sizes.sm,
    color: colors.primary,
    fontWeight: typography.weights.semibold,
  },
  categoryRow: {
    justifyContent: 'space-between',
  },
  categoryCard: {
    width: (width - spacing.lg * 3) / 2,
    marginBottom: spacing.base,
    borderRadius: borderRadius.md,
    overflow: 'hidden',
    ...shadows.base,
  },
  categoryGradient: {
    padding: spacing.base,
    height: 160,
    justifyContent: 'space-between',
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  gamesCount: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: borderRadius.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs,
  },
  gamesCountText: {
    color: colors.white,
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
  },
  categoryContent: {
    flex: 1,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: typography.sizes.lg,
    fontWeight: typography.weights.bold,
    color: colors.white,
    marginBottom: spacing.xs,
  },
  categoryDescription: {
    fontSize: typography.sizes.sm,
    color: colors.white,
    opacity: 0.8,
  },
  categoryFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewGamesText: {
    fontSize: typography.sizes.sm,
    color: colors.white,
    fontWeight: typography.weights.medium,
  },
  trendingContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  trendingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  trendingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingIcon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  trendingName: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.medium,
    color: colors.textPrimary,
  },
  trendingRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  trendingPercent: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.semibold,
    color: colors.success,
    marginRight: spacing.xs,
  },
  featuredContainer: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    ...shadows.sm,
  },
  featuredCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray200,
  },
  featuredImage: {
    width: 50,
    height: 50,
    borderRadius: borderRadius.sm,
    backgroundColor: colors.gray100,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.md,
  },
  featuredEmoji: {
    fontSize: 24,
  },
  featuredContent: {
    flex: 1,
  },
  featuredName: {
    fontSize: typography.sizes.base,
    fontWeight: typography.weights.semibold,
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  featuredMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: spacing.xs / 2,
    borderRadius: borderRadius.sm,
    marginRight: spacing.md,
  },
  statusLive: {
    backgroundColor: colors.danger,
  },
  statusToday: {
    backgroundColor: colors.warning,
  },
  statusText: {
    fontSize: typography.sizes.xs,
    fontWeight: typography.weights.bold,
    color: colors.white,
    textTransform: 'uppercase',
  },
  viewersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  viewersText: {
    fontSize: typography.sizes.sm,
    color: colors.textSecondary,
    marginLeft: spacing.xs,
  },
  quickFilters: {
    paddingHorizontal: spacing.lg,
    paddingBottom: spacing.xl,
  },
  filtersScroll: {
    marginTop: spacing.md,
  },
  filterChip: {
    backgroundColor: colors.gray200,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.xl,
    marginRight: spacing.sm,
  },
  filterChipActive: {
    backgroundColor: colors.primary,
  },
  filterText: {
    fontSize: typography.sizes.sm,
    fontWeight: typography.weights.medium,
    color: colors.textSecondary,
  },
  filterTextActive: {
    color: colors.white,
  },
});

export default DiscoverScreen;