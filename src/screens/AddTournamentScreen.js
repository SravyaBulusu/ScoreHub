// // screens/AddTournamentScreen.js
// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   ScrollView,
//   TouchableOpacity,
//   TextInput,
//   Alert,
//   KeyboardAvoidingView,
//   Platform,
// } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { LinearGradient } from 'expo-linear-gradient';
// import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

// const AddTournamentScreen = ({ navigation }) => {
//   const [formData, setFormData] = useState({
//     tourneyName: '',
//     ground: '',
//     city: '',
//     organiserName: '',
//     number: '',
//     email: '',
//     startDate: '',
//     endDate: '',
//   });

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleCreateTournament = () => {
//     // Validate required fields
//     const requiredFields = ['tourneyName', 'ground', 'city', 'organiserName', 'number', 'email', 'startDate', 'endDate'];
//     const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
//     if (emptyFields.length > 0) {
//       Alert.alert('Error', 'Please fill in all required fields');
//       return;
//     }

//     // Simulate tournament creation
//     Alert.alert(
//       'Success',
//       'Tournament created successfully!',
//       [
//         {
//           text: 'OK',
//           onPress: () => navigation.goBack()
//         }
//       ]
//     );
//   };

//   const renderInputField = (label, field, placeholder, keyboardType = 'default') => (
//     <View style={styles.inputGroup}>
//       <Text style={styles.inputLabel}>{label}</Text>
//       <TextInput
//         style={styles.textInput}
//         placeholder={placeholder}
//         value={formData[field]}
//         onChangeText={(value) => handleInputChange(field, value)}
//         keyboardType={keyboardType}
//         placeholderTextColor={colors.textMuted}
//       />
//     </View>
//   );

//   return (
//     <KeyboardAvoidingView 
//       style={styles.container} 
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//     >
//       {/* Custom Header */}
//       <LinearGradient
//         colors={[colors.primary, colors.secondary]}
//         style={styles.headerGradient}
//       >
//         <View style={styles.headerContent}>
//           <TouchableOpacity 
//             style={styles.backButton}
//             onPress={() => navigation.goBack()}
//           >
//             <Ionicons name="arrow-back" size={24} color={colors.white} />
//           </TouchableOpacity>
//           <Text style={styles.headerTitle}>Add Tournament</Text>
//           <View style={styles.headerSpacer} />
//         </View>
//       </LinearGradient>

//       <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
//         {/* Logo Upload Section */}
//         <View style={styles.logoSection}>
//           <TouchableOpacity style={styles.logoUpload}>
//             <Ionicons name="camera" size={32} color={colors.textMuted} />
//             <Text style={styles.logoText}>Upload Logo</Text>
//           </TouchableOpacity>
//         </View>

//         {/* Basic Information */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Basic Information</Text>
          
//           {renderInputField('Tournament Name', 'tourneyName', 'Enter tournament name')}
//           {renderInputField('Ground', 'ground', 'Enter ground name')}
//           {renderInputField('City', 'city', 'Enter city name')}
//         </View>

//         {/* Organizer Details */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Organizer Details</Text>
          
//           {renderInputField('Organizer Name', 'organiserName', 'Enter organizer name')}
//           {renderInputField('Phone Number', 'number', 'Enter phone number', 'phone-pad')}
//           {renderInputField('Email', 'email', 'Enter email address', 'email-address')}
//         </View>

//         {/* Tournament Details */}
//         <View style={styles.section}>
//           <Text style={styles.sectionTitle}>Tournament Details</Text>
          
//           <View style={styles.dateRow}>
//             <View style={styles.dateInput}>
//               {renderInputField('Start Date', 'startDate', 'DD/MM/YYYY')}
//             </View>
//             <View style={styles.dateInput}>
//               {renderInputField('End Date', 'endDate', 'DD/MM/YYYY')}
//             </View>
//           </View>
//         </View>

//         {/* Create Tournament Button */}
//         <TouchableOpacity 
//           style={styles.createButton}
//           onPress={handleCreateTournament}
//         >
//           <LinearGradient
//             colors={[colors.primary, colors.secondary]}
//             style={styles.createButtonGradient}
//           >
//             <Text style={styles.createButtonText}>Create Tournament</Text>
//             <Ionicons name="arrow-forward" size={20} color={colors.white} />
//           </LinearGradient>
//         </TouchableOpacity>

//         <View style={styles.bottomSpacing} />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = {
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   headerGradient: {
//     paddingTop: Platform.OS === 'ios' ? 50 : 30,
//     paddingBottom: spacing.lg,
//     paddingHorizontal: spacing.lg,
//   },
//   headerContent: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//   },
//   backButton: {
//     width: 40,
//     height: 40,
//     borderRadius: 20,
//     backgroundColor: 'rgba(255, 255, 255, 0.2)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   headerTitle: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: colors.white,
//     flex: 1,
//     textAlign: 'center',
//   },
//   headerSpacer: {
//     width: 40,
//   },
//   formContainer: {
//     flex: 1,
//     paddingHorizontal: spacing.lg,
//   },
//   logoSection: {
//     alignItems: 'center',
//     paddingVertical: spacing.xl,
//   },
//   logoUpload: {
//     width: 120,
//     height: 120,
//     borderRadius: 60,
//     backgroundColor: colors.white,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderWidth: 2,
//     borderColor: colors.gray200,
//     borderStyle: 'dashed',
//     ...shadows.sm,
//   },
//   logoText: {
//     fontSize: 14,
//     color: colors.textMuted,
//     marginTop: spacing.sm,
//     fontWeight: '500',
//   },
//   section: {
//     marginBottom: spacing.xl,
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: colors.textPrimary,
//     marginBottom: spacing.base,
//   },
//   inputGroup: {
//     marginBottom: spacing.base,
//   },
//   inputLabel: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: colors.textSecondary,
//     marginBottom: spacing.sm,
//   },
//   textInput: {
//     backgroundColor: colors.white,
//     borderRadius: borderRadius.md,
//     paddingHorizontal: spacing.base,
//     paddingVertical: spacing.md,
//     fontSize: 16,
//     color: colors.textPrimary,
//     borderWidth: 1,
//     borderColor: colors.gray200,
//     ...shadows.sm,
//   },
//   dateRow: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   dateInput: {
//     flex: 0.48,
//   },
//   createButton: {
//     marginTop: spacing.lg,
//     marginBottom: spacing.xl,
//   },
//   createButtonGradient: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingVertical: spacing.lg,
//     borderRadius: borderRadius.md,
//     ...shadows.base,
//   },
//   createButtonText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     color: colors.white,
//     marginRight: spacing.sm,
//   },
//   bottomSpacing: {
//     height: spacing.xl,
//   },
// };

// export default AddTournamentScreen;


import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
  KeyboardAvoidingView,
  Platform,
  Image,
  ActionSheetIOS,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { colors, globalStyles, spacing, borderRadius, shadows } from '../themes/globalStyles';

const AddTournamentScreen = ({ navigation }) => {
  const [formData, setFormData] = useState({
    tourneyName: '',
    ground: '',
    city: '',
    organiserName: '',
    number: '',
    email: '',
    startDate: '',
    endDate: '',
  });

  const [logoImage, setLogoImage] = useState(null);
  const [isUploadingImage, setIsUploadingImage] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Request permissions for camera and media library
  const requestPermissions = async () => {
    try {
      // Request camera permissions
      const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();
      
      // Request media library permissions
      const mediaLibraryPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      return {
        camera: cameraPermission.status === 'granted',
        mediaLibrary: mediaLibraryPermission.status === 'granted'
      };
    } catch (error) {
      console.error('Error requesting permissions:', error);
      return { camera: false, mediaLibrary: false };
    }
  };

  // Handle image selection from gallery
  const pickImageFromGallery = async () => {
    try {
      setIsUploadingImage(true);
      
      const permissions = await requestPermissions();
      
      if (!permissions.mediaLibrary) {
        Alert.alert(
          'Permission Required',
          'Please grant access to your photo library to upload images.',
          [{ text: 'OK' }]
        );
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio for logo
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setLogoImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error picking image from gallery:', error);
      Alert.alert('Error', 'Failed to pick image from gallery');
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Handle image capture from camera
  const takePhotoWithCamera = async () => {
    try {
      setIsUploadingImage(true);
      
      const permissions = await requestPermissions();
      
      if (!permissions.camera) {
        Alert.alert(
          'Permission Required',
          'Please grant camera access to take photos.',
          [{ text: 'OK' }]
        );
        return;
      }

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [1, 1], // Square aspect ratio for logo
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        setLogoImage(result.assets[0].uri);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
      Alert.alert('Error', 'Failed to take photo');
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Show image picker options
  const showImagePickerOptions = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Cancel', 'Take Photo', 'Choose from Gallery'],
          cancelButtonIndex: 0,
        },
        (buttonIndex) => {
          if (buttonIndex === 1) {
            takePhotoWithCamera();
          } else if (buttonIndex === 2) {
            pickImageFromGallery();
          }
        }
      );
    } else {
      Alert.alert(
        'Select Image',
        'Choose an option to add tournament logo',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Take Photo', onPress: takePhotoWithCamera },
          { text: 'Choose from Gallery', onPress: pickImageFromGallery },
        ]
      );
    }
  };

  // Remove selected image
  const removeImage = () => {
    Alert.alert(
      'Remove Image',
      'Are you sure you want to remove the selected logo?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Remove', style: 'destructive', onPress: () => setLogoImage(null) },
      ]
    );
  };

  const handleCreateTournament = () => {
    // Validate required fields
    const requiredFields = ['tourneyName', 'ground', 'city', 'organiserName', 'number', 'email', 'startDate', 'endDate'];
    const emptyFields = requiredFields.filter(field => !formData[field].trim());
    
    if (emptyFields.length > 0) {
      Alert.alert('Error', 'Please fill in all required fields');
      return;
    }

    // Simulate tournament creation
    Alert.alert(
      'Success',
      'Tournament created successfully!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack()
        }
      ]
    );
  };

  const renderInputField = (label, field, placeholder, keyboardType = 'default') => (
    <View style={styles.inputGroup}>
      <Text style={styles.inputLabel}>{label}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={formData[field]}
        onChangeText={(value) => handleInputChange(field, value)}
        keyboardType={keyboardType}
        placeholderTextColor={colors.textMuted}
      />
    </View>
  );

  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      {/* Custom Header */}
      <LinearGradient
        colors={[colors.primary, colors.secondary]}
        style={styles.headerGradient}
      >
        <View style={styles.headerContent}>
          <TouchableOpacity 
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color={colors.white} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Add Tournament</Text>
          <View style={styles.headerSpacer} />
        </View>
      </LinearGradient>

      <ScrollView style={styles.formContainer} showsVerticalScrollIndicator={false}>
        {/* Logo Upload Section */}
        <View style={styles.logoSection}>
          <TouchableOpacity 
            style={[styles.logoUpload, logoImage && styles.logoUploaded]} 
            onPress={showImagePickerOptions}
            disabled={isUploadingImage}
          >
            {logoImage ? (
              <View style={styles.logoImageContainer}>
                <Image source={{ uri: logoImage }} style={styles.logoImage} />
                <TouchableOpacity 
                  style={styles.removeImageButton}
                  onPress={removeImage}
                >
                  <Ionicons name="close-circle" size={24} color={colors.danger} />
                </TouchableOpacity>
              </View>
            ) : (
              <>
                <Ionicons 
                  name={isUploadingImage ? "hourglass" : "camera"} 
                  size={32} 
                  color={colors.textMuted} 
                />
                <Text style={styles.logoText}>
                  {isUploadingImage ? 'Uploading...' : 'Upload Logo'}
                </Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        {/* Basic Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Basic Information</Text>
          
          {renderInputField('Tournament Name', 'tourneyName', 'Enter tournament name')}
          {renderInputField('Ground', 'ground', 'Enter ground name')}
          {renderInputField('City', 'city', 'Enter city name')}
        </View>

        {/* Organizer Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Organizer Details</Text>
          
          {renderInputField('Organizer Name', 'organiserName', 'Enter organizer name')}
          {renderInputField('Phone Number', 'number', 'Enter phone number', 'phone-pad')}
          {renderInputField('Email', 'email', 'Enter email address', 'email-address')}
        </View>

        {/* Tournament Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Tournament Details</Text>
          
          <View style={styles.dateRow}>
            <View style={styles.dateInput}>
              {renderInputField('Start Date', 'startDate', 'DD/MM/YYYY')}
            </View>
            <View style={styles.dateInput}>
              {renderInputField('End Date', 'endDate', 'DD/MM/YYYY')}
            </View>
          </View>
        </View>

        {/* Create Tournament Button */}
        <TouchableOpacity 
          style={styles.createButton}
          onPress={handleCreateTournament}
        >
          <LinearGradient
            colors={[colors.primary, colors.secondary]}
            style={styles.createButtonGradient}
          >
            <Text style={styles.createButtonText}>Create Tournament</Text>
            <Ionicons name="arrow-forward" size={20} color={colors.white} />
          </LinearGradient>
        </TouchableOpacity>

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.background,
    
  },
  headerGradient: {
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: spacing.lg,
    paddingHorizontal: spacing.lg,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
    flex: 1,
    textAlign: 'center',
  },
  headerSpacer: {
    width: 40,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: spacing.lg,
  },
  logoSection: {
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  logoUpload: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: colors.gray200,
    borderStyle: 'dashed',
    ...shadows.sm,
  },
  logoUploaded: {
    borderStyle: 'solid',
    borderColor: colors.primary,
    padding: 0,
  },
  logoImageContainer: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  logoImage: {
    width: '100%',
    height: '100%',
    borderRadius: 60,
  },
  removeImageButton: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: colors.white,
    borderRadius: 12,
    ...shadows.sm,
  },
  logoText: {
    fontSize: 14,
    color: colors.textMuted,
    marginTop: spacing.sm,
    fontWeight: '500',
  },
  logoSubText: {
    fontSize: 12,
    color: colors.textMuted,
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  section: {
    marginBottom: spacing.xl,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: spacing.base,
  },
  inputGroup: {
    marginBottom: spacing.base,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.textSecondary,
    marginBottom: spacing.sm,
  },
  textInput: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.md,
    paddingHorizontal: spacing.base,
    paddingVertical: spacing.md,
    fontSize: 16,
    color: colors.textPrimary,
    borderWidth: 1,
    borderColor: colors.gray200,
    ...shadows.sm,
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInput: {
    flex: 0.48,
  },
  createButton: {
    marginTop: spacing.lg,
    marginBottom: spacing.xl,
  },
  createButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: spacing.lg,
    borderRadius: borderRadius.md,
    ...shadows.base,
  },
  createButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.white,
    marginRight: spacing.sm,
  },
  bottomSpacing: {
    height: spacing.xl,
  },
};

export default AddTournamentScreen;