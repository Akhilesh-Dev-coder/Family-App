import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Modal,
  Linking,
  Platform,
  StyleSheet,
  Dimensions,
  TextInput,
  Switch,
  Animated,
  Alert,
  Share,
  Vibration,
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

// 🔽 Import local images
import ramanImage from './assets/jane.jpeg';
import janakiImage from './assets/alice.jpeg';
import karunkaranImage from './assets/bob.jpeg';
import lalithabaiImage from './assets/jane.jpeg';
import vivekanandhanImage from './assets/emma.jpeg';
import rainaImage from './assets/john.jpeg';
import sidharthImage from './assets/alice.jpeg';
import suryaImage from './assets/emma.jpeg';
import balakrishnanImage from './assets/bob.jpeg';
import brahmadhathaImage from './assets/jane.jpeg';
import bindhuImage from './assets/alice.jpeg';
import jayaraganImage from './assets/bob.jpeg';
import gayatriImage from './assets/emma.jpeg';
import bheenaImage from './assets/john.jpeg';
import sajuImage from './assets/alice.jpeg';
import anandhuImage from './assets/bob.jpeg';
import narayananImage from './assets/emma.jpeg';
import chellammaImage from './assets/john.jpeg';
import chandhImage from './assets/alice.jpeg';
import geethaSandhyaImage from './assets/bob.jpeg';
import rajendrababuImage from './assets/emma.jpeg';
import jayanImage from './assets/john.jpeg';
import snehnidhiImage from './assets/alice.jpeg';
import lathaSandhyaImage from './assets/bob.jpeg';
import jayarajanImage from './assets/emma.jpeg';
import mahimaImage from './assets/john.jpeg';
import sathpriyanImage from './assets/alice.jpeg';
import chandrashekharanImage from './assets/bob.jpeg';
import kamalabayiImage from './assets/jane.jpeg';
import umeshchandranImage from './assets/bob.jpeg';
import veenaImage from './assets/alice.jpeg';
import parvathiImage from './assets/emma.jpeg';
import gowriImage from './assets/john.jpeg';
import umathangachiImage from './assets/alice.jpeg';
import bakerImage from './assets/bob.jpeg';
import ishaniImage from './assets/jane.jpeg';
import ivaniImage from './assets/alice.jpeg';
import sathashivanImage from './assets/bob.jpeg';
import omanaImage from './assets/jane.jpeg';
import manjushaImage from './assets/alice.jpeg';
import dejiImage from './assets/bob.jpeg';
import jerinImage from './assets/emma.jpeg';
import jiyaImage from './assets/john.jpeg';
import jeenuImage from './assets/alice.jpeg';
import jeshyaImage from './assets/bob.jpeg';
import renjinaImage from './assets/emma.jpeg';
import ajeeshImage from './assets/john.jpeg';
import ishanPImage from './assets/alice.jpeg';
import thanishkuImage from './assets/bob.jpeg';
import anjanaImage from './assets/alice.jpeg';
import vishalImage from './assets/bob.jpeg';
import thanusreeImage from './assets/emma.jpeg';
import meenakshiImage from './assets/john.jpeg';
import shargadharanImage from './assets/alice.jpeg';
import sreekandhImage from './assets/bob.jpeg';
import sreekalaImage from './assets/emma.jpeg';
import selvanImage from './assets/john.jpeg';
import adharshImage from './assets/alice.jpeg';
import anandhImage from './assets/bob.jpeg';
import purushothamanImage from './assets/emma.jpeg';
import renukaImage from './assets/jane.jpeg';
import akhileshImage from './assets/alice.jpeg';
import aranyaImage from './assets/bob.jpeg';
import sreejithImage from './assets/emma.jpeg';
import samarjayImage from './assets/john.jpeg';

// 🔽 Add second family images
import achuthanImage from './assets/bob.jpeg';
import lekshmiImage from './assets/alice.jpeg';
import ramachandranAImage from './assets/bob.jpeg';
import amritakumariImage from './assets/alice.jpeg';
import harilalImage from './assets/emma.jpeg';
import bhijirajImage from './assets/john.jpeg';
import akshayHariImage from './assets/alice.jpeg';
import sidharthanRImage from './assets/bob.jpeg';
import lekhaImage from './assets/alice.jpeg';
import shivashankarImage from './assets/emma.jpeg';
import shikhilImage from './assets/john.jpeg';
import chandragupthanImage from './assets/bob.jpeg';
import bindhuRImage from './assets/alice.jpeg';
import akhiramImage from './assets/emma.jpeg';
import pangajjakshiImage from './assets/alice.jpeg';
import rakhavanImage from './assets/bob.jpeg';
import sujathadeviImage from './assets/alice.jpeg';
import rajendranEyeImage from './assets/bob.jpeg';
import gayathriEngImage from './assets/alice.jpeg';
import ajuEngImage from './assets/bob.jpeg';
import parvathyEngImage from './assets/emma.jpeg';
import presannavarmanImage from './assets/bob.jpeg';
import prasannaImage from './assets/alice.jpeg';
import gopikaImage from './assets/emma.jpeg';
import gokulPImage from './assets/john.jpeg';
import jaypaalImage from './assets/bob.jpeg';
import sushmakumariImage from './assets/alice.jpeg';
import jayalekshmiJImage from './assets/emma.jpeg';
import sreelekshmiJImage from './assets/john.jpeg';
import vinodLACImage from './assets/bob.jpeg';
import sethulekshmiCGImage from './assets/alice.jpeg';
import devikaVImage from './assets/emma.jpeg';
import devakrishnanVImage from './assets/john.jpeg';
import chandramathiImage from './assets/alice.jpeg';
import veluPKImage from './assets/bob.jpeg';
import krishnakumariImage from './assets/alice.jpeg';
import ajithDevasomImage from './assets/bob.jpeg';
import athulImage from './assets/emma.jpeg';
import sheelakumariCImage from './assets/alice.jpeg';
import shaajiImage from './assets/bob.jpeg';
import deepakImage from './assets/emma.jpeg';
import dileepImage from './assets/john.jpeg';
import girirajaKumariImage from './assets/alice.jpeg';
import baijuImage from './assets/bob.jpeg';
import arathiImage from './assets/emma.jpeg';
import shajakumariCImage from './assets/alice.jpeg';
import shyamImage from './assets/bob.jpeg';
import karthikaImage from './assets/emma.jpeg';
import keerthImage from './assets/john.jpeg';
import sathikumariCImage from './assets/alice.jpeg';
import chandrashekarTeacherImage from './assets/bob.jpeg';
import geethaDImage from './assets/alice.jpeg';
import sabuTeacherImage from './assets/bob.jpeg';
import lijiImage from './assets/alice.jpeg';
import avanthikaImage from './assets/emma.jpeg';
import abdhijaImage from './assets/john.jpeg';
import sairanthriImage from './assets/alice.jpeg';
import gopalanImage from './assets/bob.jpeg';
import chithravaniImage from './assets/alice.jpeg';
import sureshDivipuramImage from './assets/bob.jpeg';
import chethasImage from './assets/emma.jpeg';
import chinmayaImage from './assets/john.jpeg';
import layalekshmiImage from './assets/alice.jpeg';
import pratheepImage from './assets/bob.jpeg';
import parvathiMysoreImage from './assets/emma.jpeg';
import gopalakrishnanAdvImage from './assets/bob.jpeg';
import shashikalaTeacherImage from './assets/alice.jpeg';
import aryaGSImage from './assets/alice.jpeg';
import ajithCSImage from './assets/bob.jpeg';
import gowthamCAImage from './assets/emma.jpeg';
import swathiGSImage from './assets/john.jpeg';

// 🔽 Third Family: Palakunnil Lekshmi & K. Madhu
import lekshmiPalakunnilImage from './assets/alice.jpeg';
import madhuImage from './assets/bob.jpeg';
import karthyayaniImage from './assets/emma.jpeg';
import gowriLImage from './assets/alice.jpeg';
import bhaskaranMImage from './assets/bob.jpeg';
import princeImage from './assets/bob.jpeg';
import raginiImage from './assets/alice.jpeg';
import aaranyaImage from './assets/emma.jpeg';
import yamunaImage from './assets/alice.jpeg';
import sajikumarImage from './assets/bob.jpeg';
import somyukthaImage from './assets/emma.jpeg';
import anandhavalliImage from './assets/alice.jpeg';
import kunnukrishnanImage from './assets/bob.jpeg';
import chandralekhaImage from './assets/alice.jpeg';
import ramachandranSpouseImage from './assets/bob.jpeg';
import manojImage from './assets/bob.jpeg';
import athiraImage from './assets/alice.jpeg';
import rathakrishnanImage from './assets/bob.jpeg';
import purukshothamanMImage from './assets/bob.jpeg';
import kaathambhariImage from './assets/alice.jpeg';
import santhoshkumarImage from './assets/bob.jpeg';
import bheenaPImage from './assets/alice.jpeg';
import aashalekshmiImage from './assets/emma.jpeg';
import anulekshmiImage from './assets/alice.jpeg';
import aneeshalekshmiImage from './assets/emma.jpeg';
import sreekalaPImage from './assets/alice.jpeg';
import mohandasImage from './assets/bob.jpeg';
import athiraMohandasImage from './assets/alice.jpeg';
import aromalImage from './assets/bob.jpeg';
import shanmathuranImage from './assets/bob.jpeg';
import ambujakshiImage from './assets/alice.jpeg';
import dineshSImage from './assets/bob.jpeg';
import sajithaImage from './assets/alice.jpeg';
import venkiteshImage from './assets/bob.jpeg';
import vinayakImage from './assets/bob.jpeg';
import gireeshImage from './assets/bob.jpeg';
import shibhiImage from './assets/alice.jpeg';
import vigneshGSImage from './assets/bob.jpeg';
import vishalGSImage from './assets/bob.jpeg';
import aravindhakshanImage from './assets/bob.jpeg';
import anadhabhayiImage from './assets/alice.jpeg';
import deeparaniImage from './assets/alice.jpeg';
import tgRajendranImage from './assets/bob.jpeg';
import vishnuRImage from './assets/bob.jpeg';
import vaishnavImage from './assets/bob.jpeg';
import dheepuAImage from './assets/bob.jpeg';
import divyaDeepuImage from './assets/alice.jpeg';
import diyaImage from './assets/emma.jpeg';
import dhyanImage from './assets/bob.jpeg';
import radhammaImage from './assets/alice.jpeg';
import bhaskaranRadhammaImage from './assets/bob.jpeg';
import nandhakumarImage from './assets/bob.jpeg';
import archanaImage from './assets/alice.jpeg';
import krishnanNImage from './assets/bob.jpeg';
import chandhanaImage from './assets/alice.jpeg';
import premchandhImage from './assets/bob.jpeg';
import bheenaPremImage from './assets/alice.jpeg';
import aishwaryaImage from './assets/alice.jpeg';
import abhiramiImage from './assets/alice.jpeg';
import karamchandhImage from './assets/bob.jpeg';
import dhanyaLImage from './assets/alice.jpeg';
import hariKImage from './assets/bob.jpeg';
import sreebindhuDImage from './assets/alice.jpeg';
import drRajendranImage from './assets/bob.jpeg';
import vijayammaImage from './assets/alice.jpeg';
import rahulrajImage from './assets/bob.jpeg';
import lekshmirajImage from './assets/alice.jpeg';
import abhilashImage from './assets/bob.jpeg';
import devathathImage from './assets/emma.jpeg';
import poornimarajImage from './assets/alice.jpeg';

// 🔽 Icons
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Feather from '@expo/vector-icons/Feather';

// 🔽 Types
type FamilyMember = {
  id: string;
  name: string;
  image: any;
  age?: string;
  occupation?: string;
  address?: string;
  phone?: string;
  email?: string;
  birthday?: string;
  hobbies?: string[];
  status?: 'Deceased';
  spouseObj?: FamilyMember;
  children?: FamilyMember[];
};

// 🔽 Flatten tree for search
const flattenTree = (node: FamilyMember): FamilyMember[] => {
  const result: FamilyMember[] = [node];
  if (node.children) {
    node.children.forEach((child) => {
      result.push(...flattenTree(child));
    });
  }
  if (node.spouseObj) {
    result.push(node.spouseObj);
  }
  return result;
};

const { width } = Dimensions.get('window');

export default function App() {
  const [familyTrees, setFamilyTrees] = useState<FamilyMember[]>([]);
  const [memberStack, setMemberStack] = useState<FamilyMember[]>([]);
  const [showImageModal, setShowImageModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [selectedImageName, setSelectedImageName] = useState<string>('');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [greetingMessage, setGreetingMessage] = useState('');

  // Animation refs
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const slideAnim = useRef(new Animated.Value(-100)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const imageScaleAnim = useRef(new Animated.Value(1)).current;

  // Image map
  const imageMap: { [key: string]: any } = {
    'raman.jpg': ramanImage,
    'janaki.jpg': janakiImage,
    'karunkaran.jpg': karunkaranImage,
    'lalithabai.jpg': lalithabaiImage,
    'vivekanandhan.jpg': vivekanandhanImage,
    'raina.jpg': rainaImage,
    'sidharth.jpg': sidharthImage,
    'surya.jpg': suryaImage,
    'balakrishnan.jpg': balakrishnanImage,
    'brahmadhatha.jpg': brahmadhathaImage,
    'bindhu.jpg': bindhuImage,
    'jayaragan.jpg': jayaraganImage,
    'gayatri.jpg': gayatriImage,
    'bheena.jpg': bheenaImage,
    'saju.jpg': sajuImage,
    'anandhu.jpg': anandhuImage,
    'narayanan.jpg': narayananImage,
    'chellamma.jpg': chellammaImage,
    'chandh.jpg': chandhImage,
    'geetha_sandhya.jpg': geethaSandhyaImage,
    'rajendrababu.jpg': rajendrababuImage,
    'jayan.jpg': jayanImage,
    'snehnidhi.jpg': snehnidhiImage,
    'latha_sandhya.jpg': lathaSandhyaImage,
    'jayarajan.jpg': jayarajanImage,
    'mahima.jpg': mahimaImage,
    'sathpriyan.jpg': sathpriyanImage,
    'chandrashekharan.jpg': chandrashekharanImage,
    'kamalabayi.jpg': kamalabayiImage,
    'umeshchandran.jpg': umeshchandranImage,
    'veena.jpg': veenaImage,
    'parvathi.jpg': parvathiImage,
    'gowri.jpg': gowriImage,
    'umathangachi.jpg': umathangachiImage,
    'baker.jpg': bakerImage,
    'ishani.jpg': ishaniImage,
    'ivani.jpg': ivaniImage,
    'sathashivan.jpg': sathashivanImage,
    'omana.jpg': omanaImage,
    'manjusha.jpg': manjushaImage,
    'deji.jpg': dejiImage,
    'jerin.jpg': jerinImage,
    'jiya.jpg': jiyaImage,
    'jeenu.jpg': jeenuImage,
    'jeshya.jpg': jeshyaImage,
    'renjina.jpg': renjinaImage,
    'ajeesh.jpg': ajeeshImage,
    'ishan.jpg': ishanPImage,
    'thanishku.jpg': thanishkuImage,
    'anjana.jpg': anjanaImage,
    'vishal.jpg': vishalImage,
    'thanusree.jpg': thanusreeImage,
    'meenakshi.jpg': meenakshiImage,
    'shargadharan.jpg': shargadharanImage,
    'sreekandh.jpg': sreekandhImage,
    'sreekala.jpg': sreekalaImage,
    'selvan.jpg': selvanImage,
    'adharsh.jpg': adharshImage,
    'anandh.jpg': anandhImage,
    'purushothaman.jpg': purushothamanImage,
    'renuka.jpg': renukaImage,
    'akhilesh.jpg': akhileshImage,
    'aranya.jpg': aranyaImage,
    'sreejith.jpg': sreejithImage,
    'samarjay.jpg': samarjayImage,

    // 👇 Second Family Images
    'achuthan.jpg': achuthanImage,
    'lekshmi.jpg': lekshmiImage,
    'ramachandran_a.jpg': ramachandranAImage,
    'amritakumari.jpg': amritakumariImage,
    'harilal.jpg': harilalImage,
    'bhijiraj.jpg': bhijirajImage,
    'akshay_hari.jpg': akshayHariImage,
    'sidharthan_r.jpg': sidharthanRImage,
    'lekha.jpg': lekhaImage,
    'shivashankar.jpg': shivashankarImage,
    'shikhil.jpg': shikhilImage,
    'chandragupthan.jpg': chandragupthanImage,
    'bindhu_r.jpg': bindhuRImage,
    'akhiram.jpg': akhiramImage,
    'pangajjakshi.jpg': pangajjakshiImage,
    'rakhavan.jpg': rakhavanImage,
    'sujathadevi.jpg': sujathadeviImage,
    'rajendran_eye.jpg': rajendranEyeImage,
    'gayathri_engineer.jpg': gayathriEngImage,
    'aju_engineer.jpg': ajuEngImage,
    'parvathy_engineer.jpg': parvathyEngImage,
    'presannavarman.jpg': presannavarmanImage,
    'prasanna.jpg': prasannaImage,
    'gopika_mbbs.jpg': gopikaImage,
    'gokul_p.jpg': gokulPImage,
    'jaypaal_ayurveda.jpg': jaypaalImage,
    'sushmakumari_vet.jpg': sushmakumariImage,
    'jayalekshmi_j.jpg': jayalekshmiJImage,
    'sreelekshmi_j.jpg': sreelekshmiJImage,
    'vinod_lac.jpg': vinodLACImage,
    'sethulekshmi_cg.jpg': sethulekshmiCGImage,
    'devika_v.jpg': devikaVImage,
    'devakrishnan_v.jpg': devakrishnanVImage,
    'chandramathi.jpg': chandramathiImage,
    'velu_pk.jpg': veluPKImage,
    'krishnakumari.jpg': krishnakumariImage,
    'ajith_devasom.jpg': ajithDevasomImage,
    'athul.jpg': athulImage,
    'sheelakumari_c.jpg': sheelakumariCImage,
    'shaaji.jpg': shaajiImage,
    'deepak.jpg': deepakImage,
    'dileep.jpg': dileepImage,
    'giriraja_kumari.jpg': girirajaKumariImage,
    'baiju.jpg': baijuImage,
    'arathi.jpg': arathiImage,
    'shajakumari_c.jpg': shajakumariCImage,
    'shyam.jpg': shyamImage,
    'karthika.jpg': karthikaImage,
    'keerth.jpg': keerthImage,
    'sathikumari_c.jpg': sathikumariCImage,
    'chandrashekar_teacher.jpg': chandrashekarTeacherImage,
    'geetha_d.jpg': geethaDImage,
    'sabu_teacher.jpg': sabuTeacherImage,
    'liji.jpg': lijiImage,
    'avanthika.jpg': avanthikaImage,
    'abdhija.jpg': abdhijaImage,
    'sairanthri.jpg': sairanthriImage,
    'gopalan_gopalan.jpg': gopalanImage,
    'chithravani.jpg': chithravaniImage,
    'suresh_divipuram.jpg': sureshDivipuramImage,
    'chethas.jpg': chethasImage,
    'chinmaya.jpg': chinmayaImage,
    'layalekshmi.jpg': layalekshmiImage,
    'pratheep_mysore.jpg': pratheepImage,
    'parvathi_mysore.jpg': parvathiMysoreImage,
    'gopalakrishnan_adv.jpg': gopalakrishnanAdvImage,
    'shashikala_teacher.jpg': shashikalaTeacherImage,
    'arya_gs.jpg': aryaGSImage,
    'ajith_cs_programmer.jpg': ajithCSImage,
    'gowtham_ca.jpg': gowthamCAImage,
    'swathi_gs.jpg': swathiGSImage,

    //Third family
    'lekshmi_palakunnil.jpg': lekshmiPalakunnilImage,
    'madhu.jpg': madhuImage,
    'karthyayani.jpg': karthyayaniImage,
    'gowri_l.jpg': gowriLImage,
    'bhaskaran_m.jpg': bhaskaranMImage,
    'prince.jpg': princeImage,
    'ragini.jpg': raginiImage,
    'aaranya.jpg': aaranyaImage,
    'yamuna.jpg': yamunaImage,
    'sajikumar.jpg': sajikumarImage,
    'somyuktha.jpg': somyukthaImage,
    'anandhavalli.jpg': anandhavalliImage,
    'kunnukrishnan.jpg': kunnukrishnanImage,
    'chandralekha.jpg': chandralekhaImage,
    'ramachandran_spouse.jpg': ramachandranSpouseImage,
    'manoj.jpg': manojImage,
    'athira.jpg': athiraImage,
    'rathakrishnan.jpg': rathakrishnanImage,
    'purukshothaman_m.jpg': purukshothamanMImage,
    'kaathambhari.jpg': kaathambhariImage,
    'santhoshkumar.jpg': santhoshkumarImage,
    'bheena_p.jpg': bheenaPImage,
    'aashalekshmi.jpg': aashalekshmiImage,
    'anulekshmi.jpg': anulekshmiImage,
    'aneeshalekshmi.jpg': aneeshalekshmiImage,
    'sreekala_p.jpg': sreekalaPImage,
    'mohandas.jpg': mohandasImage,
    'athira_mohandas.jpg': athiraMohandasImage,
    'aromal.jpg': aromalImage,
    'shanmathuran.jpg': shanmathuranImage,
    'ambujakshi.jpg': ambujakshiImage,
    'dinesh_s.jpg': dineshSImage,
    'sajitha.jpg': sajithaImage,
    'venkitesh.jpg': venkiteshImage,
    'vinayak.jpg': vinayakImage,
    'gireesh.jpg': gireeshImage,
    'shibhi.jpg': shibhiImage,
    'vignesh_gs.jpg': vigneshGSImage,
    'vishal_gs.jpg': vishalGSImage,
    'aravindhakshan.jpg': aravindhakshanImage,
    'anadhabhayi.jpg': anadhabhayiImage,
    'deeparani.jpg': deeparaniImage,
    'tg_rajendran.jpg': tgRajendranImage,
    'vishnu_r.jpg': vishnuRImage,
    'vaishnav.jpg': vaishnavImage,
    'dheepu_a.jpg': dheepuAImage,
    'divya_deepu.jpg': divyaDeepuImage,
    'diya.jpg': diyaImage,
    'dhyan.jpg': dhyanImage,
    'radhamma.jpg': radhammaImage,
    'bhaskaran_radhamma.jpg': bhaskaranRadhammaImage,
    'nandhakumar.jpg': nandhakumarImage,
    'archana.jpg': archanaImage,
    'krishnan_n.jpg': krishnanNImage,
    'chandhana.jpg': chandhanaImage,
    'premchandh.jpg': premchandhImage,
    'bheena_prem.jpg': bheenaPremImage,
    'aishwarya.jpg': aishwaryaImage,
    'abhirami.jpg': abhiramiImage,
    'karamchandh.jpg': karamchandhImage,
    'dhanya_l.jpg': dhanyaLImage,
    'hari_k.jpg': hariKImage,
    'sreebindhu_d.jpg': sreebindhuDImage,
    'dr_rajendran.jpg': drRajendranImage,
    'vijayamma.jpg': vijayammaImage,
    'rahulraj.jpg': rahulrajImage,
    'lekshmiraj.jpg': lekshmirajImage,
    'abhilash.jpg': abhilashImage,
    'devathath.jpg': devathathImage,
    'poornimaraj.jpg': poornimarajImage
  };

  // Attach real images to JSON data
  const attachImages = (member: any): FamilyMember => {
    const mapped = { ...member };
    if (mapped.image && typeof mapped.image === 'string') {
      mapped.image = imageMap[mapped.image] || imageMap['alice.jpeg'];
    }
    if (mapped.spouseObj) {
      mapped.spouseObj = attachImages(mapped.spouseObj);
    }
    if (mapped.children && Array.isArray(mapped.children)) {
      mapped.children = mapped.children.map((child: any) => attachImages(child));
    }
    return mapped;
  };

  useEffect(() => {
    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 12) greeting = 'Good Morning!';
    else if (hour < 17) greeting = 'Good Afternoon!';
    else if (hour < 21) greeting = 'Good Evening!';
    else greeting = 'Good Night!';
    setGreetingMessage(greeting);

    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    const pulseAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.1,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    );
    pulseAnimation.start();

    // ✅ Load family data using require()
    try {
      const jsonData = require('./data/familyData.json');
      const loadedTrees = jsonData.map((tree: any) => attachImages(tree));
      setFamilyTrees(loadedTrees);
    } catch (error) {
      console.error('Failed to load or parse familyData.json', error);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (Platform.OS !== 'web') Vibration.vibrate(50);
  };

  const toggleFavorite = (memberId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(memberId)) {
      newFavorites.delete(memberId);
    } else {
      newFavorites.add(memberId);
      if (Platform.OS !== 'web') Vibration.vibrate(100);
    }
    setFavorites(newFavorites);
  };

  const openImageModal = (imageUri: any, name: string) => {
    setSelectedImage(imageUri);
    setSelectedImageName(name);
    setShowImageModal(true);
    Animated.spring(imageScaleAnim, {
      toValue: 1.1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start();
  };

  const closeImageModal = () => {
    Animated.spring(imageScaleAnim, {
      toValue: 1,
      tension: 100,
      friction: 8,
      useNativeDriver: true,
    }).start(() => {
      setShowImageModal(false);
      setSelectedImage(null);
      setSelectedImageName('');
    });
  };

  const shareProfile = async (member: FamilyMember) => {
    try {
      await Share.share({
        message: `Check out ${member.name}'s profile!
${
          member.status ? `Status: ${member.status}\n` : ''
        }${member.age ? `Age: ${member.age}\n` : ''}${
          member.occupation ? `Occupation: ${member.occupation}\n` : ''
        }${member.phone ? `Phone: ${member.phone}\n` : ''}${
          member.email ? `Email: ${member.email}\n` : ''
        }${member.address ? `Address: ${member.address}` : ''}`,
        title: `${member.name}'s Profile`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  const showMemberStats = () => {
    const allMembers = familyTrees.flatMap((tree) => flattenTree(tree));
    const total = allMembers.length;
    const living = allMembers.filter((m) => m.status !== 'Deceased').length;
    const avgAge = allMembers
      .filter((m) => m.age)
      .reduce((sum, m) => sum + parseInt(m.age || '0'), 0);
    const uniqueAges = allMembers.filter((m) => m.age).length;
    const avg = uniqueAges > 0 ? Math.round(avgAge / uniqueAges) : 0;
    Alert.alert(
      'Family Statistics',
      `Total Members: ${total}
Living: ${living}
Deceased: ${total - living}
Average Age: ${avg} years
Favorites: ${favorites.size}`,
      [{ text: 'Got it', style: 'default' }]
    );
  };

  const makeCall = (phone?: string) => {
    if (!phone) return;
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const url = `tel:${cleanPhone}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) Linking.openURL(url);
      else Alert.alert('Error', 'Phone calls not supported');
    });
  };

  const sendSMS = (phone?: string) => {
    if (!phone) return;
    const cleanPhone = phone.replace(/[^0-9+]/g, '');
    const url = `sms:${cleanPhone}`;
    Linking.canOpenURL(url).then((supported) => {
      if (supported) Linking.openURL(url);
      else Alert.alert('Error', 'SMS not supported');
    });
  };

  const sendEmail = (email?: string) => {
    if (!email) return;
    const url = `mailto:${email}`;
    Linking.openURL(url);
  };

  const downloadPhoto = async (photo: any, name: string) => {
    if (Platform.OS === 'web') {
      Alert.alert('Info', 'Download not available on web');
      return;
    }
    const { status } = await MediaLibrary.requestPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permission Required', 'Need permission to save photos');
      return;
    }
    const uri = Image.resolveAssetSource(photo).uri;
    const filename = `${name.replace(/\s+/g, '_')}_family.jpg`;
    const dest = `${FileSystem.documentDirectory}${filename}`;
    await FileSystem.copyAsync({ from: uri, to: dest });
    await MediaLibrary.saveToLibraryAsync(dest);
    Alert.alert('Success', 'Photo saved to gallery!');
  };

  const sharePhoto = async (photo: any, name: string) => {
    if (Platform.OS === 'web') {
      Alert.alert('Info', 'Sharing not available on web');
      return;
    }
    const uri = Image.resolveAssetSource(photo).uri;
    await Sharing.shareAsync(uri, {
      dialogTitle: `Share ${name}'s photo`,
    });
  };

  const openInMaps = (address?: string) => {
    if (!address) return;
    const cleanAddress = address.trim().replace(/\s+/g, ' ');
    const query = encodeURIComponent(cleanAddress);
    const url = Platform.select({
      ios: `http://maps.apple.com/?q=${query}`,
      android: `https://www.google.com/maps/search/?api=1&query=${query}`,
      default: `https://www.google.com/maps/search/?api=1&query=${query}`,
    });
    if (url) {
      Linking.openURL(url).catch(() => {
        Alert.alert('Error', 'Could not open maps. Please install Google Maps or Apple Maps.');
      });
    }
  };

  const getThemedStyles = () => ({
    container: {
      ...styles.container,
      backgroundColor: isDarkMode ? '#111827' : '#f3f4f6',
    },
    header: {
      ...styles.header,
      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
    },
    headerTitle: {
      ...styles.headerTitle,
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    headerSubtitle: {
      ...styles.headerSubtitle,
      color: isDarkMode ? '#d1d5db' : '#6b7280',
    },
    greetingText: {
      ...styles.greetingText,
      color: isDarkMode ? '#fbbf24' : '#059669',
    },
    searchInput: {
      ...styles.searchInput,
      backgroundColor: isDarkMode ? '#374151' : '#f9fafb',
      color: isDarkMode ? '#f9fafb' : '#111827',
      borderColor: isDarkMode ? '#4b5563' : '#d1d5db',
    },
    card: {
      ...styles.card,
      backgroundColor: isDarkMode ? '#374151' : '#ffffff',
      borderColor: isDarkMode ? '#4b5563' : '#e5e7eb',
    },
    memberName: {
      ...styles.memberName,
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    memberAge: {
      ...styles.memberAge,
      color: isDarkMode ? '#9ca3af' : '#6b7280',
    },
    memberOccupation: {
      ...styles.memberOccupation,
      color: isDarkMode ? '#9ca3af' : '#6b7280',
    },
    memberAddress: {
      ...styles.memberAddress,
      color: isDarkMode ? '#9ca3af' : '#6b7280',
    },
    modalContainer: {
      ...styles.modalContainer,
      backgroundColor: isDarkMode ? '#1f2937' : '#ffffff',
    },
    modalTitle: {
      ...styles.modalTitle,
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    detailCard: {
      ...styles.detailCard,
      backgroundColor: isDarkMode ? '#4b5563' : '#f9fafb',
    },
    detailLabel: {
      ...styles.detailLabel,
      color: isDarkMode ? '#d1d5db' : '#6b7280',
    },
    detailValue: {
      ...styles.detailValue,
      color: isDarkMode ? '#f9fafb' : '#111827',
    },
    imageModalBackground: {
      ...styles.imageModalBackground,
      backgroundColor: '#000000',
    },
    imageModalHeader: {
      ...styles.imageModalHeader,
      backgroundColor: 'rgba(0,0,0,0.8)',
    },
    imageModalName: {
      ...styles.imageModalName,
      color: '#ffffff',
    },
  });

  const themedStyles = getThemedStyles();

  const allMembers = familyTrees.flatMap((tree) => flattenTree(tree));
  const filteredFamilies = searchQuery
    ? allMembers.filter((member) =>
        member.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : familyTrees;

  const isSearching = searchQuery.length > 0;
  const showDetailModal = memberStack.length > 0;
  const currentMember = memberStack[memberStack.length - 1];

  const pushMember = (member: FamilyMember) => {
    setMemberStack((prev) => [...prev, member]);
  };

  const popMember = () => {
    setMemberStack((prev) => prev.slice(0, -1));
  };

  return (
    <SafeAreaView style={themedStyles.container}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      {/* Header */}
      <Animated.View
        style={[
          themedStyles.header,
          {
            opacity: fadeAnim,
            transform: [{ translateY: slideAnim }],
          },
        ]}
      >
        <View style={styles.greetingRow}>
          <Text style={themedStyles.greetingText}>{greetingMessage}</Text>
          <TouchableOpacity onPress={showMemberStats} style={styles.statsButton}>
            <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
              <MaterialIcons
                name="bar-chart"
                size={24}
                color={isDarkMode ? '#fbbf24' : '#059669'}
              />
            </Animated.View>
          </TouchableOpacity>
        </View>
        <View style={styles.headerRow}>
          <Text style={themedStyles.headerTitle}>Family Tree</Text>
          <TouchableOpacity
            onPress={toggleDarkMode}
            style={[
              styles.toggleContainer,
              {
                backgroundColor: isDarkMode ? '#374151' : '#f1f5f9',
              },
            ]}
          >
            <Ionicons
              name={isDarkMode ? 'sunny' : 'moon'}
              size={20}
              color={isDarkMode ? '#fbbf24' : '#374151'}
            />
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              thumbColor={isDarkMode ? '#fbbf24' : '#ffffff'}
              trackColor={{ false: '#d1d5db', true: '#374151' }}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.statsRow}>
          <Text style={themedStyles.headerSubtitle}>
            {filteredFamilies.length} {isSearching ? 'members' : 'families'} • {favorites.size} favorites
          </Text>
          {favorites.size > 0 && (
            <View style={styles.favoritesBadge}>
              <FontAwesome name="heart" size={12} color="#ffffff" />
              <Text style={styles.favoritesText}>{favorites.size}</Text>
            </View>
          )}
        </View>
        {/* Search */}
        <View style={styles.searchContainer}>
          <Feather
            name="search"
            size={20}
            color={isDarkMode ? '#9ca3af' : '#6b7280'}
            style={styles.searchIcon}
          />
          <TextInput
            style={themedStyles.searchInput}
            placeholder="Search anyone in the family..."
            placeholderTextColor={isDarkMode ? '#9ca3af' : '#6b7280'}
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
          {searchQuery.length > 0 && (
            <TouchableOpacity
              onPress={() => setSearchQuery('')}
              style={styles.clearButton}
            >
              <Text style={{ fontSize: 20, color: isDarkMode ? '#9ca3af' : '#6b7280' }}>
                ×
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </Animated.View>

      {/* Family List */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {filteredFamilies.length > 0 ? (
          filteredFamilies.map((member) => (
            <TouchableOpacity
              key={member.id}
              style={[
                themedStyles.card,
                favorites.has(member.id) && styles.favoriteCard,
              ]}
              onPress={() => pushMember(member)}
              activeOpacity={0.7}
            >
              <View style={styles.cardContent}>
                <TouchableOpacity
                  onPress={() => openImageModal(member.image, member.name)}
                >
                  <Image
                    source={member.image}
                    style={[styles.cardImage, favorites.has(member.id) && styles.favoriteImage]}
                  />
                  {favorites.has(member.id) && (
                    <View style={styles.favoriteOverlay}>
                      <FontAwesome name="heart" size={16} color="#ff6b6b" />
                    </View>
                  )}
                </TouchableOpacity>
                <View style={styles.memberInfo}>
                  <View style={styles.nameRow}>
                    <Text style={themedStyles.memberName} numberOfLines={1} ellipsizeMode="tail">
                      {member.name}
                      {member.status === 'Deceased' && ' (Deceased)'}
                    </Text>
                    <TouchableOpacity
                      onPress={() => toggleFavorite(member.id)}
                      style={styles.favoriteButton}
                    >
                      <FontAwesome
                        name={favorites.has(member.id) ? 'heart' : 'heart-o'}
                        size={20}
                        color="#ff6b6b"
                      />
                    </TouchableOpacity>
                  </View>
                  {member.occupation && (
                    <Text style={themedStyles.memberOccupation}>{member.occupation}</Text>
                  )}
                  {member.address && (
                    <Text style={themedStyles.memberAddress} numberOfLines={1}>
                      {member.address}
                    </Text>
                  )}
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Animated.View style={[styles.noResults, { opacity: fadeAnim }]}>
            <Feather name="search" size={48} color={isDarkMode ? '#4b5563' : '#d1d5db'} />
            <Text style={{ fontSize: 16, color: isDarkMode ? '#d1d5db' : '#6b7280', marginTop: 16 }}>
              No results found
            </Text>
            <Text style={{ color: isDarkMode ? '#9ca3af' : '#9ca3af', fontSize: 14, marginTop: 8 }}>
              Try another name
            </Text>
          </Animated.View>
        )}
      </ScrollView>

      {/* Detail Modal */}
      <Modal visible={showDetailModal} animationType="slide" presentationStyle="pageSheet">
        <SafeAreaView style={themedStyles.modalContainer}>
          <View
            style={[
              styles.modalHeader,
              { borderBottomColor: isDarkMode ? '#374151' : '#e5e7eb' },
            ]}
          >
            <TouchableOpacity onPress={popMember}>
              <Text style={styles.closeButton}>Back</Text>
            </TouchableOpacity>
            <Text style={themedStyles.modalTitle}>Profile</Text>
            <TouchableOpacity
              onPress={() => currentMember && shareProfile(currentMember)}
              style={styles.shareButton}
            >
              <Feather name="share" size={24} color="#2563eb" />
            </TouchableOpacity>
          </View>
          {currentMember && (
            <ScrollView style={styles.modalContent}>
              {/* Profile */}
              <View style={styles.profileImageContainer}>
                <TouchableOpacity
                  onPress={() => openImageModal(currentMember.image, currentMember.name)}
                >
                  <Image
                    source={currentMember.image}
                    style={[
                      styles.profileImage,
                      favorites.has(currentMember.id) && styles.favoriteProfileImage,
                    ]}
                  />
                  {favorites.has(currentMember.id) && (
                    <View style={styles.favoriteProfileOverlay}>
                      <FontAwesome name="heart" size={24} color="#ff6b6b" />
                    </View>
                  )}
                </TouchableOpacity>
                <View style={styles.profileNameRow}>
                  <Text style={[themedStyles.memberName, { fontSize: 24, fontWeight: '700' }]}>
                    {currentMember.name}
                    {currentMember.status === 'Deceased' && ' (Deceased)'}
                  </Text>
                  <TouchableOpacity
                    onPress={() => toggleFavorite(currentMember.id)}
                    style={styles.profileFavoriteButton}
                  >
                    <FontAwesome
                      name={favorites.has(currentMember.id) ? 'heart' : 'heart-o'}
                      size={28}
                      color="#ff6b6b"
                    />
                  </TouchableOpacity>
                </View>
              </View>

              {/* Actions */}
              <View style={styles.actionsContainer}>
                {currentMember.status !== 'Deceased' && currentMember.phone && (
                  <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: '#10b981' }]}
                    onPress={() => makeCall(currentMember.phone)}
                  >
                    <Feather name="phone" size={20} color="white" />
                    <Text style={styles.actionButtonText}>Call</Text>
                  </TouchableOpacity>
                )}
                {currentMember.status !== 'Deceased' && currentMember.phone && (
                  <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: '#3b82f6' }]}
                    onPress={() => sendSMS(currentMember.phone)}
                  >
                    <Feather name="message" size={20} color="white" />
                    <Text style={styles.actionButtonText}>Message</Text>
                  </TouchableOpacity>
                )}
                {currentMember.email && (
                  <TouchableOpacity
                    style={[styles.actionButton, { backgroundColor: '#8b5cf6' }]}
                    onPress={() => sendEmail(currentMember.email)}
                  >
                    <Feather name="mail" size={20} color="white" />
                    <Text style={styles.actionButtonText}>Email</Text>
                  </TouchableOpacity>
                )}
              </View>

              {/* Details */}
              <View style={styles.detailsContainer}>
                {currentMember.status === 'Deceased' && (
                  <View style={[themedStyles.detailCard, { backgroundColor: '#fee2e2' }]}>
                    <Text style={{ color: '#b91c1c', fontWeight: '600' }}>Status: Deceased</Text>
                  </View>
                )}
                {currentMember.occupation && (
                  <View style={themedStyles.detailCard}>
                    <Text style={themedStyles.detailLabel}>OCCUPATION</Text>
                    <Text style={themedStyles.detailValue}>{currentMember.occupation}</Text>
                  </View>
                )}
                {currentMember.address && (
                  <View style={themedStyles.detailCard}>
                    <Text style={themedStyles.detailLabel}>ADDRESS</Text>
                    <Text style={themedStyles.detailValue}>{currentMember.address}</Text>
                    <View style={styles.buttonRow}>
                      <TouchableOpacity
                        style={[styles.actionButton, styles.blueButton]}
                        onPress={() => openInMaps(currentMember.address)}
                      >
                        <Feather name="map-pin" size={16} color="white" style={{ marginRight: 4 }} />
                        <Text style={styles.buttonText}>Open in Maps</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {currentMember.phone && (
                  <View style={themedStyles.detailCard}>
                    <Text style={themedStyles.detailLabel}>PHONE</Text>
                    <Text style={themedStyles.detailValue}>{currentMember.phone}</Text>
                  </View>
                )}

                {/* SPOUSE as Child-like Card */}
                {currentMember.spouseObj && (
                  <View style={themedStyles.detailCard}>
                    <Text style={themedStyles.detailLabel}>SPOUSE</Text>
                    <TouchableOpacity
                      style={styles.childRow}
                      onPress={() => pushMember(currentMember.spouseObj!)}
                    >
                      <Image
                        source={currentMember.spouseObj.image}
                        style={styles.childImage}
                      />
                      <View style={styles.childInfo}>
                        <Text style={themedStyles.memberName}>
                          {currentMember.spouseObj.name}
                        </Text>
                        {currentMember.spouseObj.occupation && (
                          <Text style={themedStyles.memberOccupation}>
                            {currentMember.spouseObj.occupation}
                          </Text>
                        )}
                        {currentMember.spouseObj.address && (
                          <Text style={themedStyles.memberAddress} numberOfLines={1}>
                            {currentMember.spouseObj.address}
                          </Text>
                        )}
                      </View>
                      <Feather
                        name="chevron-right"
                        size={18}
                        color={isDarkMode ? '#d1d5db' : '#6b7280'}
                      />
                    </TouchableOpacity>
                  </View>
                )}

                {/* CHILDREN */}
                {currentMember.children && currentMember.children.length > 0 && (
                  <View style={themedStyles.detailCard}>
                    <Text style={themedStyles.detailLabel}>CHILDREN</Text>
                    {currentMember.children.map((child) => (
                      <TouchableOpacity
                        key={child.id}
                        style={styles.childRow}
                        onPress={() => pushMember(child)}
                      >
                        <Image source={child.image} style={styles.childImage} />
                        <View style={styles.childInfo}>
                          <Text style={themedStyles.memberName}>{child.name}</Text>
                          {child.occupation && (
                            <Text style={themedStyles.memberOccupation}>{child.occupation}</Text>
                          )}
                        </View>
                        <Feather name="chevron-right" size={18} color={isDarkMode ? '#d1d5db' : '#6b7280'} />
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
            </ScrollView>
          )}
        </SafeAreaView>
      </Modal>

      {/* Image Modal */}
      <Modal
        visible={showImageModal}
        animationType="fade"
        transparent
        onRequestClose={closeImageModal}
      >
        <View style={themedStyles.imageModalBackground}>
          <StatusBar style="light" />
          <SafeAreaView style={themedStyles.imageModalHeader}>
            <View style={styles.imageModalHeaderContent}>
              <Text style={themedStyles.imageModalName}>{selectedImageName}</Text>
              <View style={styles.imageModalActions}>
                <TouchableOpacity
                  style={styles.imageModalActionButton}
                  onPress={() => currentMember && shareProfile(currentMember)}
                >
                  <Feather name="share" size={24} color="#ffffff" />
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.imageModalCloseButton}
                  onPress={closeImageModal}
                >
                  <Ionicons name="close" size={28} color="#ffffff" />
                </TouchableOpacity>
              </View>
            </View>
          </SafeAreaView>
          <View style={styles.imageModalImageContainer}>
            <TouchableOpacity
              style={styles.imageModalImageTouchable}
              activeOpacity={1}
              onPress={closeImageModal}
            >
              {selectedImage && (
                <Animated.Image
                  source={selectedImage}
                  style={[
                    styles.imageModalImage,
                    { transform: [{ scale: imageScaleAnim }] },
                  ]}
                  resizeMode="contain"
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ✅ Styles (unchanged)
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f3f4f6' },
  header: {
    padding: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
  },
  greetingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  greetingText: { fontSize: 16, fontWeight: '600', color: '#059669' },
  statsButton: { padding: 8, borderRadius: 12, backgroundColor: 'rgba(5, 150, 105, 0.1)' },
  headerRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: '#111827' },
  headerSubtitle: { fontSize: 14, color: '#6b7280' },
  statsRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 },
  favoritesBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#ff6b6b', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, gap: 4 },
  favoritesText: { color: '#ffffff', fontSize: 12, fontWeight: '600' },
  toggleContainer: { flexDirection: 'row', alignItems: 'center', paddingVertical: 6, paddingHorizontal: 10, borderRadius: 20, gap: 6 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', position: 'relative' },
  searchIcon: { position: 'absolute', left: 16, zIndex: 1 },
  searchInput: { backgroundColor: '#f9fafb', borderRadius: 12, paddingHorizontal: 48, paddingVertical: 12, fontSize: 16, borderWidth: 1, borderColor: '#d1d5db', flex: 1 },
  clearButton: { position: 'absolute', right: 16, zIndex: 1, padding: 4 },
  scrollView: { flex: 1 },
  scrollContent: { paddingHorizontal: 12, paddingBottom: 20 },
  card: { flexDirection: 'row', alignItems: 'center', marginHorizontal: 12, marginBottom: 16, borderRadius: 16, padding: 14, borderWidth: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.05, shadowRadius: 4, elevation: 2 },
  favoriteCard: { borderColor: '#ff6b6b', borderWidth: 2, backgroundColor: 'rgba(255, 107, 107, 0.05)' },
  cardContent: { flexDirection: 'row', alignItems: 'center', flex: 1 },
  cardImage: { width: 60, height: 60, borderRadius: 30, marginRight: 16 },
  favoriteImage: { borderWidth: 2, borderColor: '#ff6b6b' },
  favoriteOverlay: { position: 'absolute', top: -4, right: 12, backgroundColor: '#ffffff', borderRadius: 12, padding: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.2, shadowRadius: 2, elevation: 2 },
  memberInfo: { flex: 1 },
  nameRow: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  memberName: { fontSize: 18, fontWeight: 'bold', flex: 1 },
  memberAge: { fontSize: 14, marginTop: 2 },
  memberOccupation: { fontSize: 14, marginTop: 2 },
  memberAddress: { fontSize: 12, marginTop: 4 },
  favoriteButton: { padding: 4 },
  modalContainer: { flex: 1 },
  modalHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1 },
  closeButton: { color: '#2563eb', fontSize: 16, fontWeight: '600' },
  modalTitle: { fontSize: 18, fontWeight: 'bold' },
  shareButton: { padding: 4 },
  modalContent: { flex: 1, padding: 16 },
  profileImageContainer: { alignItems: 'center', marginBottom: 24 },
  profileImage: { width: 120, height: 120, borderRadius: 60, borderWidth: 3, borderColor: '#2563eb' },
  favoriteProfileImage: { borderColor: '#ff6b6b', borderWidth: 4 },
  favoriteProfileOverlay: { position: 'absolute', top: -8, right: -8, backgroundColor: '#ffffff', borderRadius: 20, padding: 4, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4, elevation: 4 },
  profileNameRow: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  profileFavoriteButton: { padding: 8 },
  actionsContainer: { flexDirection: 'row', marginBottom: 20, gap: 8 },
  actionButton: { flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 16, borderRadius: 12, gap: 4 },
  actionButtonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  detailsContainer: { gap: 14 },
  detailCard: { padding: 16, borderRadius: 12 },
  detailLabel: { fontSize: 12, fontWeight: '600', marginBottom: 8, letterSpacing: 0.5 },
  detailValue: { fontSize: 16, fontWeight: '500', lineHeight: 22 },
  buttonRow: { flexDirection: 'row', gap: 8, marginTop: 12 },
  blueButton: { backgroundColor: '#2563eb' },
  buttonText: { color: 'white', fontWeight: '600', fontSize: 14 },
  hobbiesContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 8 },
  hobbyTag: { backgroundColor: '#dbeafe', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 16 },
  hobbyText: { fontSize: 14, color: '#1d4ed8', fontWeight: '500' },
  noResults: { flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 60 },
  imageModalBackground: { flex: 1, backgroundColor: '#000000' },
  imageModalHeader: { position: 'absolute', top: 0, left: 0, right: 0, zIndex: 1, backgroundColor: 'rgba(0,0,0,0.7)', paddingBottom: 10 },
  imageModalHeaderContent: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 8 },
  imageModalName: { fontSize: 18, fontWeight: '600', color: '#ffffff', flex: 1, marginRight: 16 },
  imageModalActions: { flexDirection: 'row', gap: 12 },
  imageModalActionButton: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)' },
  imageModalCloseButton: { padding: 8, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.2)' },
  imageModalImageContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  imageModalImageTouchable: { flex: 1, width: '100%', justifyContent: 'center', alignItems: 'center' },
  imageModalImage: { width: width, height: width * 1.2, maxWidth: width, maxHeight: '80%' },
  childRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, paddingHorizontal: 8, backgroundColor: 'rgba(37, 99, 235, 0.05)', borderRadius: 12, marginTop: 8 },
  childImage: { width: 40, height: 40, borderRadius: 20, marginRight: 12 },
  childInfo: { flex: 1 },
});