// node_modules/@stripoinc/ui-editor-extensions/dist/constants/BlockCompositionType.js
var BlockCompositionType;
(function(BlockCompositionType2) {
  BlockCompositionType2["BLOCK"] = "BLOCK";
  BlockCompositionType2["STRUCTURE"] = "STRUCTURE";
})(BlockCompositionType || (BlockCompositionType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/AiAssistantValueType.js
var AiAssistantValueType;
(function(AiAssistantValueType2) {
  AiAssistantValueType2["SUBJECT"] = "subject";
  AiAssistantValueType2["HIDDEN_PREHEADER"] = "hiddenPreheader";
  AiAssistantValueType2["TEXT_BLOCK"] = "textBlock";
})(AiAssistantValueType || (AiAssistantValueType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/BlockAttributes.js
var containerAttributes = {
  widthPercent: "width-percent"
};
var emptyContainerAttributes = {
  ...containerAttributes,
  blocks: "blocks"
};

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/BlockName.js
var BlockName;
(function(BlockName2) {
  BlockName2["BUTTON"] = "esd-block-button";
  BlockName2["TEXT"] = "esd-block-text";
  BlockName2["IMAGE"] = "esd-block-image";
  BlockName2["STRUCTURE"] = "esd-structure";
  BlockName2["VIDEO"] = "esd-block-video";
  BlockName2["SOCIAL"] = "esd-block-social";
  BlockName2["BANNER"] = "esd-block-banner";
  BlockName2["TIMER"] = "esd-block-timer";
  BlockName2["MENU"] = "esd-block-menu";
  BlockName2["HTML"] = "esd-block-html";
  BlockName2["SPACER"] = "esd-block-spacer";
  BlockName2["CONTAINER"] = "esd-container-frame";
})(BlockName || (BlockName = {}));
var BlockSelector;
(function(BlockSelector2) {
  BlockSelector2["BUTTON"] = ".esd-block-button";
  BlockSelector2["TEXT"] = ".esd-block-text";
  BlockSelector2["IMAGE"] = ".esd-block-image";
  BlockSelector2["STRUCTURE"] = ".esd-structure";
  BlockSelector2["VIDEO"] = ".esd-block-video";
  BlockSelector2["SOCIAL"] = ".esd-block-social";
  BlockSelector2["BANNER"] = ".esd-block-banner";
  BlockSelector2["TIMER"] = ".esd-block-timer";
  BlockSelector2["MENU"] = ".esd-block-menu";
  BlockSelector2["HTML"] = ".esd-block-html";
  BlockSelector2["SPACER"] = ".esd-block-spacer";
  BlockSelector2["CONTAINER"] = ".esd-container-frame";
  BlockSelector2["STRIPE"] = ".esd-stripe";
  BlockSelector2["FORM"] = ".esd-amp-form";
})(BlockSelector || (BlockSelector = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/BlockType.js
var BlockType;
(function(BlockType2) {
  BlockType2["BLOCK_IMAGE"] = "BLOCK_IMAGE";
  BlockType2["BLOCK_TEXT"] = "BLOCK_TEXT";
  BlockType2["BLOCK_BUTTON"] = "BLOCK_BUTTON";
  BlockType2["BLOCK_SPACER"] = "BLOCK_SPACER";
  BlockType2["BLOCK_VIDEO"] = "BLOCK_VIDEO";
  BlockType2["BLOCK_SOCIAL"] = "BLOCK_SOCIAL";
  BlockType2["BLOCK_BANNER"] = "BLOCK_BANNER";
  BlockType2["BLOCK_TIMER"] = "BLOCK_TIMER";
  BlockType2["BLOCK_MENU"] = "BLOCK_MENU";
  BlockType2["BLOCK_MENU_ITEM"] = "BLOCK_MENU_ITEM";
  BlockType2["BLOCK_HTML"] = "BLOCK_HTML";
  BlockType2["BLOCK_AMP_CAROUSEL"] = "BLOCK_AMP_CAROUSEL";
  BlockType2["BLOCK_AMP_ACCORDION"] = "BLOCK_AMP_ACCORDION";
  BlockType2["BLOCK_AMP_FORM"] = "BLOCK_AMP_FORM";
  BlockType2["CONTAINER"] = "CONTAINER";
  BlockType2["FORM_CONTAINER"] = "FORM_CONTAINER";
  BlockType2["STRUCTURE"] = "STRUCTURE";
  BlockType2["STRIPE"] = "STRIPE";
  BlockType2["EMPTY_CONTAINER"] = "EMPTY_CONTAINER";
  BlockType2["CUSTOM_BLOCK_LINK"] = "CUSTOM_BLOCK_LINK";
  BlockType2["CUSTOM_BLOCK_IMAGE"] = "CUSTOM_BLOCK_IMAGE";
  BlockType2["CUSTOM_BLOCK_TEXT"] = "CUSTOM_BLOCK_TEXT";
})(BlockType || (BlockType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/BuiltInControlTypes.js
var GeneralControls;
(function(GeneralControls2) {
  GeneralControls2["ANCHOR_LINK_CONTAINER"] = "anchorLinkFormContainer";
  GeneralControls2["APPLY_CONDITION"] = "applyCondition";
  GeneralControls2["APPLY_CONDITION_SWITCHER"] = "applyConditionSwitcher";
  GeneralControls2["BACKGROUND_COLOR"] = "backgroundColor";
  GeneralControls2["BACKGROUND_IMAGE"] = "generalImageContainer";
  GeneralControls2["TEXT_COLOR"] = "textColor";
  GeneralControls2["TEXT_STYLE"] = "textStyle";
  GeneralControls2["TEXT_SIZE"] = "textSize";
  GeneralControls2["TEXT_LINE_SPACING"] = "textLineSpacing";
  GeneralControls2["TEXT_ALIGN"] = "textAlign";
  GeneralControls2["FIXED_HEIGHT_SWITCHER"] = "fixedHeightSwitcherForm";
  GeneralControls2["HIDDEN_NODE"] = "hiddenNode";
  GeneralControls2["SMART_BLOCK"] = "smartBlock";
  GeneralControls2["SYNCHRONIZED_MODULE"] = "synchronizedModuleForm";
  GeneralControls2["FONT_FAMILY"] = "generalFontFamilyForm";
  GeneralControls2["BLOCK_INTERNAL_INDENTS"] = "generalBlockInternalIndents";
  GeneralControls2["STRUCTURE_INTERNAL_INDENTS"] = "generalStructureInternalIndents";
})(GeneralControls || (GeneralControls = {}));
var BannerControls;
(function(BannerControls2) {
  BannerControls2["ALIGNMENT"] = "bannerAlignment";
  BannerControls2["ALT_TEXT"] = "bannerAltText";
  BannerControls2["ANCHOR_LINK_CONTAINER"] = "bannerAnchorLinkContainerForm";
  BannerControls2["ASPECT_RATIO"] = "bannerAspectRatioForm";
  BannerControls2["BACKGROUND_COLOR"] = "bannerBackgroundColor";
  BannerControls2["BACKGROUND_IMAGE_CONTAINER"] = "bannerBackgroundImageContainer";
  BannerControls2["SIZE"] = "bannerBlockBannerSize";
  BannerControls2["BLOCK_LINK"] = "bannerBlockLink";
  BannerControls2["CHILD_ROTATION"] = "bannerChildRotationForm";
  BannerControls2["CROP"] = "bannerCropForm";
  BannerControls2["FILTER"] = "bannerFilter";
  BannerControls2["EXTERNAL_INDENTS"] = "bannerExternalIndents";
  BannerControls2["MIME_TYPE"] = "bannerMimeTypeForm";
  BannerControls2["RESPONSIVE_IMAGE"] = "bannerResponsiveImageForm";
})(BannerControls || (BannerControls = {}));
var BannerChildControls;
(function(BannerChildControls2) {
  BannerChildControls2["ADDITIONAL_IMAGE"] = "bannerAdditionalImageForm";
  BannerChildControls2["ADDITIONAL_IMAGE_ASPECT_RATIO"] = "bannerAdditionalImageAspectRatioForm";
  BannerChildControls2["CHILD_COLOR"] = "bannerChildColorForm";
  BannerChildControls2["CHILD_FLIP"] = "bannerChildFlipForm";
  BannerChildControls2["CHILD_OPACITY"] = "bannerChildOpacityForm";
  BannerChildControls2["TEXT_ALIGNMENT"] = "bannerTextAlignmentForm";
  BannerChildControls2["TEXT_FONT"] = "bannerTextFontContainer";
  BannerChildControls2["TEXT_LETTER_CASE"] = "bannerTextLetterCaseForm";
  BannerChildControls2["TEXT_STYLE"] = "bannerTextStyleForm";
})(BannerChildControls || (BannerChildControls = {}));
var ButtonControls;
(function(ButtonControls2) {
  ButtonControls2["ADJUST_TO_WIDTH"] = "adjustToWidth";
  ButtonControls2["ALIGNMENT"] = "buttonAlignment";
  ButtonControls2["BORDER"] = "buttonBorder";
  ButtonControls2["BORDER_RADIUS"] = "buttonBorderRadius";
  ButtonControls2["COLOR"] = "buttonColor";
  ButtonControls2["BUTTON_BLOCK_BACKGROUND_COLOR"] = "buttonBlockBackgroundColor";
  ButtonControls2["EXTERNAL_INDENTS"] = "buttonExternalIndents";
  ButtonControls2["FIXED_HEIGHT_CONTAINER"] = "buttonFixedHeightContainerForm";
  ButtonControls2["FONT_COLOR"] = "buttonFontColor";
  ButtonControls2["FONT_FAMILY"] = "buttonFontFamily";
  ButtonControls2["FONT_SIZE"] = "buttonFontSize";
  ButtonControls2["ICON"] = "buttonIconContainer";
  ButtonControls2["ICON_ALIGN"] = "buttonIconAlign";
  ButtonControls2["ICON_INDENT"] = "buttonIconIndent";
  ButtonControls2["ICON_WIDTH"] = "buttonIconWidth";
  ButtonControls2["IMAGE"] = "buttonImageForm";
  ButtonControls2["INTERNAL_INDENTS"] = "buttonInternalIndents";
  ButtonControls2["LINK"] = "buttonLink";
  ButtonControls2["MIME_TYPE"] = "buttonMimeTypeForm";
  ButtonControls2["SWITCHER_HOVERED_STYLES"] = "buttonSwitcherHoveredStylesForm";
  ButtonControls2["TEXT"] = "buttonText";
  ButtonControls2["TEXT_STYLE_AND_COLOR"] = "buttonTextStyleAndColorForm";
  ButtonControls2["HOVERED_BORDER_COLOR"] = "hoveredStyleBorderButtonForm";
  ButtonControls2["HOVERED_COLOR"] = "hoveredButtonColorForm";
  ButtonControls2["HOVERED_TEXT_COLOR"] = "hoveredButtonTextColorForm";
})(ButtonControls || (ButtonControls = {}));
var TextControls;
(function(TextControls2) {
  TextControls2["HIDDEN_NODE"] = "hiddenNodeText";
  TextControls2["PARAGRAPH_STYLE"] = "paragraphStyleForm";
  TextControls2["ALIGN"] = "textAlignmentForm";
  TextControls2["ANCHOR_CONTAINER"] = "textAnchorForm";
  TextControls2["FONT_BACKGROUND_COLOR"] = "textBlockFontBackgroundColor";
  TextControls2["TEXT_BLOCK_BACKGROUND_COLOR"] = "textBlockBackgroundColor";
  TextControls2["FONT_COLOR"] = "textBlockFontColor";
  TextControls2["FONT_FAMILY"] = "textBlockFontFamily";
  TextControls2["FONT_SIZE"] = "textBlockFontSize";
  TextControls2["DIRECTION"] = "textBlockDirectionForm";
  TextControls2["INSERT_FORM"] = "textBlockInsertForm";
  TextControls2["LINK_DATA"] = "textBlockLinkDataForm";
  TextControls2["FORMAT"] = "textBlockTextFormatForm";
  TextControls2["FIXED_HEIGHT_CONTAINER"] = "textFixedHeightContainerForm";
  TextControls2["INTERNAL_INDENTS"] = "textInternalIndents";
  TextControls2["LINE_HEIGHT"] = "textLineHeightForm";
  TextControls2["LINKS_COLOR"] = "textLinksFontColorForm";
  TextControls2["MIME_TYPE"] = "textMimeTypeForm";
  TextControls2["NO_LINE_WRAPS"] = "textNoLineWrapsForm";
})(TextControls || (TextControls = {}));
var AmpFormControls;
(function(AmpFormControls2) {
  AmpFormControls2["AMP_FORM_HIDDEN_NODE"] = "ampFormHiddenNodeForm";
  AmpFormControls2["AMP_FORM_MIME_TYPE"] = "ampFormMimeTypeForm";
  AmpFormControls2["BACKGROUND_COLOR"] = "ampFormBackgroundColorForm";
})(AmpFormControls || (AmpFormControls = {}));
var VideoControls;
(function(VideoControls2) {
  VideoControls2["CUSTOM_THUMBNAIL_CONTAINER"] = "customThumbnailContainerForm";
  VideoControls2["METADATA_LINK"] = "metadataLink";
  VideoControls2["PLAY_BUTTON"] = "playButton";
  VideoControls2["ALIGNMENT"] = "videoAlignment";
  VideoControls2["ALT_TEXT"] = "videoAltText";
  VideoControls2["EXTERNAL_INDENTS"] = "videoExternalIndents";
  VideoControls2["MIME_TYPE"] = "videoMimeTypeForm";
  VideoControls2["RESPONSIVE"] = "videoResponsive";
  VideoControls2["SIZE"] = "videoSizeContainer";
})(VideoControls || (VideoControls = {}));
var TimerControls;
(function(TimerControls2) {
  TimerControls2["ALIGNMENT"] = "timerAlignment";
  TimerControls2["ALT_TEXT"] = "timerAltText";
  TimerControls2["BACKGROUND_COLOR"] = "timerBackgroundColor";
  TimerControls2["DATE_TIME"] = "timeDateTime";
  TimerControls2["DIGITAL_LABELS"] = "timerDigitalLabels";
  TimerControls2["DIGITS_FONT_COLOR_CONTAINER"] = "timerDigitsFontColorContainer";
  TimerControls2["DIGITS_FONT_CONTAINER"] = "timerDigitsFontContainer";
  TimerControls2["DISPLAY_DAYS_SWITCHER"] = "timerDisplayDaysSwitcher";
  TimerControls2["EXPIRATION_IMAGE"] = "timerExpirationImage";
  TimerControls2["EXPIRATION_IMAGE_SWITCHER"] = "timerExpirationSwitcher";
  TimerControls2["EXTERNAL_INDENTS"] = "timerExternalIndents";
  TimerControls2["LABELS_CASE"] = "timerLabelsCase";
  TimerControls2["LABELS_FONT_COLOR_CONTAINER"] = "timerLabelsFontColorContainer";
  TimerControls2["LABELS_FONT_CONTAINER"] = "timerLabelsFontContainer";
  TimerControls2["LABEL_LANGUAGE"] = "timerLabelsLanguage";
  TimerControls2["LINK"] = "timerLink";
  TimerControls2["MIME_TYPE"] = "timerMimeTypeForm";
  TimerControls2["RESPONSIVE"] = "timerResponsive";
  TimerControls2["RETINA_DISPLAY_SUPPORT"] = "timerRetinaDisplaySupport";
  TimerControls2["SEPARATOR"] = "timerSeparator";
  TimerControls2["SEPARATOR_FONT_COLOR"] = "timerSeparatorFontColor";
  TimerControls2["SEPARATOR_FONT_CONTAINER"] = "timerSeparatorFontContainer";
  TimerControls2["SIZE"] = "timerSize";
  TimerControls2["TIME_ZONE"] = "timerTimeZone";
})(TimerControls || (TimerControls = {}));
var SpacerControls;
(function(SpacerControls2) {
  SpacerControls2["ALIGNMENT"] = "spacerAlignment";
  SpacerControls2["BORDER"] = "spacerBorder";
  SpacerControls2["EXTERNAL_INDENTS"] = "spacerExternalIndents";
  SpacerControls2["MIME_TYPE"] = "spacerMimeTypeForm";
  SpacerControls2["MODE"] = "spacerMode";
  SpacerControls2["SIZE"] = "spacerSize";
  SpacerControls2["BACKGROUND_COLOR"] = "spacerBackgroundColor";
})(SpacerControls || (SpacerControls = {}));
var ImageControls;
(function(ImageControls2) {
  ImageControls2["ALT_TEXT"] = "altText";
  ImageControls2["LINK"] = "blockLink";
  ImageControls2["ALIGNMENT"] = "imageAlignment";
  ImageControls2["ANCHOR_LINK_CONTAINER"] = "imageAnchorLinkContainerForm";
  ImageControls2["BORDER_RADIUS"] = "imageBorderRadiusForm";
  ImageControls2["IMAGE"] = "imageImageForm";
  ImageControls2["EXTERNAL_INDENTS"] = "imageExternalIndents";
  ImageControls2["MIME_TYPE"] = "imageMimeTypeForm";
  ImageControls2["RESPONSIVE"] = "imageResponsive";
  ImageControls2["ROLLOVER_IMAGE"] = "imageRolloverImageForm";
  ImageControls2["ROLLOVER_SWITCHER"] = "imageRolloverSwitcherForm";
  ImageControls2["SIZE"] = "imageSizeContainer";
})(ImageControls || (ImageControls = {}));
var HTMLControls;
(function(HTMLControls2) {
  HTMLControls2["EXTERNAL_INDENTS"] = "htmlExternalIndents";
  HTMLControls2["MIME_TYPE"] = "htmlMimeTypeForm";
})(HTMLControls || (HTMLControls = {}));
var CustomLinkControls;
(function(CustomLinkControls2) {
  CustomLinkControls2["IMAGE"] = "customBlockImageForm";
  CustomLinkControls2["COLOR_FORM"] = "customLinkColorForm";
  CustomLinkControls2["HREF_FORM"] = "customLinkHrefForm";
  CustomLinkControls2["TEXT_FORM"] = "customLinkTextForm";
  CustomLinkControls2["UNDERLINE_FORM"] = "customLinkUnderlineForm";
  CustomLinkControls2["WORD_BREAK_FORM"] = "customLinkWordBreakForm";
})(CustomLinkControls || (CustomLinkControls = {}));
var CustomImageControls;
(function(CustomImageControls2) {
  CustomImageControls2["ALT_TEXT_FORM"] = "customBlockImageAltTextForm";
  CustomImageControls2["WITHOUT_LINK_FORM"] = "customBlockImageWithOutLinkForm";
})(CustomImageControls || (CustomImageControls = {}));
var CustomTextControls;
(function(CustomTextControls2) {
  CustomTextControls2["ALIGN"] = "customTextBlockTextAlign";
  CustomTextControls2["FONT_SIZE"] = "customTextFontSizeController";
})(CustomTextControls || (CustomTextControls = {}));
var SocialControls;
(function(SocialControls2) {
  SocialControls2["ICON_SIZE"] = "iconSize";
  SocialControls2["EXTERNAL_INDENTS"] = "socialExternalIndents";
  SocialControls2["ICON_SPACER"] = "socialIconsSpacer";
  SocialControls2["ICON_TYPE"] = "socialIconTypeForm";
  SocialControls2["ITEM"] = "socialItemForm";
  SocialControls2["ITEM_TEXT_CUSTOMIZATION"] = "socialItemTextCustomizationForm";
  SocialControls2["MIME_TYPE"] = "socialMimeTypeForm";
  SocialControls2["NETWORK_ALIGNMENT"] = "socialNetworkAlignment";
  SocialControls2["BACKGROUND_COLOR"] = "socialBackgroundColor";
})(SocialControls || (SocialControls = {}));
var MenuControls;
(function(MenuControls2) {
  MenuControls2["EXTERNAL_INDENTS"] = "menuExternalIndents";
  MenuControls2["ALIGNMENT"] = "menuAlignment";
  MenuControls2["RESPONSIVE_MENU"] = "menuResponsive";
  MenuControls2["FIT_TO_CONTAINER"] = "menuFitToContainer";
  MenuControls2["FONT_FAMILY"] = "menuFontFamily";
  MenuControls2["FONT_SIZE"] = "menuFontSize";
  MenuControls2["HIDDEN"] = "menuHidden";
  MenuControls2["ICONS_CONFIGURATION"] = "menuIconsConfiguration";
  MenuControls2["ITEMS"] = "menuItemsForm";
  MenuControls2["ITEMS_COUNT"] = "menuItemsCount";
  MenuControls2["ITEM_INTERNAL_INDENTS"] = "menuItemInternalIndents";
  MenuControls2["MIME_TYPE"] = "menuMimeTypeForm";
  MenuControls2["SEPARATE_ITEMS"] = "menuSeparateItems";
  MenuControls2["SEPARATE_ITEMS_COLOR_SWITCHER"] = "menuSeparateItemsColorSwitcher";
  MenuControls2["SEPARATOR"] = "menuSeparatorForm";
  MenuControls2["STYLES"] = "menuStylesForm";
  MenuControls2["TEXT_STYLE_AND_COLOR"] = "menuTextStyleAndColor";
  MenuControls2["TYPE_CONTAINER"] = "menuTypeContainerForm";
})(MenuControls || (MenuControls = {}));
var AccordionControls;
(function(AccordionControls2) {
  AccordionControls2["MIME_TYPE"] = "ampAccordionMimeTypeForm";
  AccordionControls2["ANIMATED_OPENING"] = "ampAccordionAnimatedOpeningForm";
  AccordionControls2["AUTO_COLLAPSING"] = "ampAccordionAutoCollapsingForm";
  AccordionControls2["BORDER_FORM"] = "ampAccordionBorderForm";
  AccordionControls2["FONT_FAMILY"] = "ampAccordionFontFamily";
  AccordionControls2["ICON_SIZE"] = "ampAccordionIconSizeForm";
  AccordionControls2["SECTIONS_GAP_FORM"] = "ampAccordionSectionsGapForm";
  AccordionControls2["SECTIONS_MAIN_FORM"] = "ampAccordionSectionsMainForm";
  AccordionControls2["TITLES_BACKGROUND_COLOR"] = "ampAccordionTitlesBackgroundColor";
  AccordionControls2["TITLE_ALIGNMENT_FORM"] = "ampAccordionTitleAlignmentForm";
  AccordionControls2["TITLE_FONT_SIZE"] = "AmpAccordionTitleFontSizeController";
  AccordionControls2["TITLE_ICON_IMAGE"] = "ampAccordionTitleIconImageForm";
  AccordionControls2["TITLE_ICON_SWITCHER"] = "ampAccordionTitleIconSwitcherForm";
  AccordionControls2["TITLE_TEXT_STYLE_AND_COLOR"] = "AmpAccordionTitleTextStyleAndColorController";
})(AccordionControls || (AccordionControls = {}));
var CarouselControls;
(function(CarouselControls2) {
  CarouselControls2["MIME_TYPE"] = "ampCarouselMimeTypeForm";
  CarouselControls2["AUTOPLAY"] = "ampCarouselAutoplayForm";
  CarouselControls2["AUTOPLAY_DELAY"] = "ampCarouselDelayForm";
  CarouselControls2["LOOP"] = "ampCarouselLoopForm";
  CarouselControls2["SLIDES"] = "ampSlidesForm";
  CarouselControls2["SLIDE_ALT_TEXT"] = "ampSlideAltTextForm";
  CarouselControls2["SLIDE_IMAGE"] = "ampSlideImageForm";
  CarouselControls2["SLIDE_IMAGE_FIT"] = "ampCarouselSlideImageFitForm";
  CarouselControls2["SLIDE_LINK"] = "ampSlideLinkForm";
  CarouselControls2["SLIDE_RADIUS"] = "ampCarouselSlideRadiusForm";
  CarouselControls2["SLIDE_THUMBNAIL_SWITCHER"] = "ampCarouselSlideThumbnailSwitcherForm";
  CarouselControls2["THUMBNAIL_BORDER_STYLE"] = "ampCarouselThumbnailBorderStyleForm";
  CarouselControls2["THUMBNAIL_CONTAINER"] = "ampCarouselThumbnailContainerForm";
  CarouselControls2["THUMBNAIL_CUSTOM_REVIEW"] = "ampCarouselThumbnailCustomPreviewImageForm";
  CarouselControls2["THUMBNAIL_RADIUS"] = "ampCarouselThumbnailRadiusForm";
  CarouselControls2["AMP_GENERAL_LINK"] = "AMP_GENERAL_LINK_CONTROLLER";
  CarouselControls2["AMP_GENERAL_LINK_SWITCHER"] = "AMP_GENERAL_LINK_SWITCHER";
})(CarouselControls || (CarouselControls = {}));
var StripeControls;
(function(StripeControls2) {
  StripeControls2["BORDER_FORM"] = "stripeBorderForm";
  StripeControls2["COLOR"] = "stripeColorForm";
  StripeControls2["CONTENT_COLOR"] = "stripeContentColor";
  StripeControls2["IMAGE_CONTAINER"] = "stripeImageContainerForm";
  StripeControls2["INTERNAL_INDENTS"] = "stripeInternalIndents";
  StripeControls2["MESSAGE_AREA"] = "stripeMessageAreaForm";
  StripeControls2["MIME_TYPE"] = "stripeMimeTypeForm";
})(StripeControls || (StripeControls = {}));
var StructureControls;
(function(StructureControls2) {
  StructureControls2["RESPONSIVE_STRUCTURE"] = "responsiveStructure";
  StructureControls2["BACKGROUND_COLOR"] = "structureBackgroundColor";
  StructureControls2["BORDER_RADIUS"] = "structureBorderRadiusForm";
  StructureControls2["CONTAINER_GAP"] = "structureContainerGap";
  StructureControls2["CONTAINER_INVERSION"] = "structureContainerInversion";
  StructureControls2["DYNAMIC_CONTAINERS"] = "structureDynamicContainers";
  StructureControls2["EXTERNAL_INDENTS"] = "structureExternalIndents";
  StructureControls2["IMAGE_CONTAINER"] = "structureImageContainerForm";
  StructureControls2["INTERNAL_INDENTS"] = "structureInternalIndents";
  StructureControls2["ITEM"] = "structureItem";
  StructureControls2["MIME_TYPE"] = "structureMimeType";
  StructureControls2["BORDER_FORM"] = "structureBorderForm";
})(StructureControls || (StructureControls = {}));
var ContainerControls;
(function(ContainerControls2) {
  ContainerControls2["BACKGROUND_COLOR"] = "containerBackgroundColorForm";
  ContainerControls2["BORDER_FORM"] = "containerBorderForm";
  ContainerControls2["BORDER_RADIUS"] = "containerBorderRadiusForm";
  ContainerControls2["EXTERNAL_INDENTS"] = "containerExternalIndentsForm";
  ContainerControls2["IMAGE_CONTAINER"] = "containerImageContainerForm";
  ContainerControls2["MIME_TYPE"] = "containerMimeTypeForm";
  ContainerControls2["DISPLAY_CONDITIONS"] = "displayConditions";
})(ContainerControls || (ContainerControls = {}));
var MessageSettingsControls;
(function(MessageSettingsControls2) {
  MessageSettingsControls2["DISPLAY_OFFER_BADGE"] = "displayOfferBadgeForm";
  MessageSettingsControls2["DISPLAY_PROMO_CODE_BADGE"] = "displayPromoCodeBadgeForm";
  MessageSettingsControls2["END_DISCOUNT_OFFER"] = "endDiscountOfferForm";
  MessageSettingsControls2["GMAIL_PROMOTIONS_TAB"] = "gmailPromotionsTabForm";
  MessageSettingsControls2["HIDDEN_PRE_HEADER"] = "hiddenPreHeaderForm";
  MessageSettingsControls2["PROMO_IMAGE_CAROUSEL"] = "promoImageCarouselForm";
  MessageSettingsControls2["INCLUDE_SENDER_LOGO"] = "includeSenderLogoForm";
  MessageSettingsControls2["SUBJECT_TITLE"] = "subjectTitleForm";
  MessageSettingsControls2["UTM_PARAMETERS"] = "utmParametersForm";
  MessageSettingsControls2["UTM_PARAMETERS_CAMPAIGN"] = "utmParameterCampaignForm";
  MessageSettingsControls2["UTM_PARAMETERS_CUSTOM"] = "utmParametersCustomForm";
  MessageSettingsControls2["UTM_PARAMETERS_CUSTOM_ITEM"] = "utmParametersCustomItemForm";
})(MessageSettingsControls || (MessageSettingsControls = {}));
var GeneralStylesControls;
(function(GeneralStylesControls2) {
  GeneralStylesControls2["BUTTONS_ADJUST_TO_WIDTH_CONTAINER"] = "buttonsAdjustToWidthFormContainer";
  GeneralStylesControls2["BUTTONS_BORDER"] = "buttonsBorder";
  GeneralStylesControls2["BUTTONS_BORDER_RADIUS_CONTAINER"] = "buttonsBorderRadiusContainer";
  GeneralStylesControls2["BUTTONS_COLOR_CONTAINER"] = "buttonsColorContainer";
  GeneralStylesControls2["BUTTONS_FONT_FAMILY_CONTAINER"] = "buttonsFontFamilyContainer";
  GeneralStylesControls2["BUTTONS_FONT_SIZE_CONTAINER"] = "buttonsFontSizeFormContainer";
  GeneralStylesControls2["BUTTONS_HOVERED_BUTTON_STYLE"] = "buttonsHoveredButtonStyleForm";
  GeneralStylesControls2["BUTTONS_INTERNAL_INDENTS_CONTAINER"] = "buttonsInternalIndentsContainer";
  GeneralStylesControls2["BUTTONS_LETTER_SPACING_CONTAINER"] = "buttonsLetterSpacingContainer";
  GeneralStylesControls2["BUTTONS_OUTLOOK_SUPPORT_CONTAINER"] = "buttonsOutlookSupportContainer";
  GeneralStylesControls2["BUTTONS_TEXT_STYLE_AND_COLOR_CONTAINER"] = "buttonsTextStyleAndColorFormContainer";
  GeneralStylesControls2["DEFAULT_STRUCTURE_INTERNAL_INDENTS"] = "defaultStructureInternalIndents";
  GeneralStylesControls2["GENERAL_BACKGROUND_COLOR_CONTAINER"] = "generalBackgroundColorContainer";
  GeneralStylesControls2["GENERAL_IMAGE_CONTAINER"] = "generalImageContainer";
  GeneralStylesControls2["HEADINGS_FONT_FAMILY_CONTAINER"] = "headingsFontFamilyContainer";
  GeneralStylesControls2["HEADINGS_H1_CONTROLS_CONTAINER"] = "headingH1controlsContainer";
  GeneralStylesControls2["HEADINGS_H2_CONTROLS_CONTAINER"] = "headingH2controlsContainer";
  GeneralStylesControls2["HEADINGS_H3_CONTROLS_CONTAINER"] = "headingH3controlsContainer";
  GeneralStylesControls2["HEADINGS_H4_CONTROLS_CONTAINER"] = "headingH4controlsContainer";
  GeneralStylesControls2["HEADINGS_H5_CONTROLS_CONTAINER"] = "headingH5controlsContainer";
  GeneralStylesControls2["HEADINGS_H6_CONTROLS_CONTAINER"] = "headingH6controlsContainer";
  GeneralStylesControls2["HEADINGS_LETTER_SPACING_CONTAINER"] = "headingsLetterSpacingFormContainer";
  GeneralStylesControls2["HEADINGS_PARAGRAPH_BOTTOM_MARGIN"] = "headingsParagraphBottomMarginForm";
  GeneralStylesControls2["HEADINGS_TYPES_BUTTON_BAR"] = "headingsTypesButtonBarForm";
  GeneralStylesControls2["LISTS_STYLES"] = "listsStyles";
  GeneralStylesControls2["MARGIN_AROUND_MESSAGE"] = "marginAroundMessage";
  GeneralStylesControls2["MESSAGE_ALIGNMENT"] = "messageAlignment";
  GeneralStylesControls2["MESSAGE_CONTENT_WIDTH"] = "messageContentWidth";
  GeneralStylesControls2["RESPONSIVE_DESIGN"] = "responsiveDesign";
  GeneralStylesControls2["RIGHT_TO_LEFT_CONTAINER"] = "rightToLeftContainer";
  GeneralStylesControls2["STRIPES_CONTENT_CONTROLS_CONTAINER"] = "stripesContentControlsContainer";
  GeneralStylesControls2["STRIPES_FONT_FAMILY_CONTAINER"] = "stripesFontFamilyFormContainer";
  GeneralStylesControls2["STRIPES_FOOTER_CONTROLS_CONTAINER"] = "stripesFooterControlsContainer";
  GeneralStylesControls2["STRIPES_HEADER_CONTROLS_CONTAINER"] = "stripesHeaderControlsContainer";
  GeneralStylesControls2["STRIPES_INFO_AREA_CONTROLS_CONTAINER"] = "stripesInfoAreaControlsContainer";
  GeneralStylesControls2["STRIPES_LETTER_SPACING_CONTAINER"] = "stripesLetterSpacingFormContainer";
  GeneralStylesControls2["STRIPES_LINE_HEIGHT_CONTAINER"] = "stripesLineHeightFormContainer";
  GeneralStylesControls2["STRIPE_TYPES_BUTTON_BAR"] = "stripeTypesButtonBarForm";
  GeneralStylesControls2["UNDERLINE_LINKS_CONTAINER"] = "underlineLinksContainer";
})(GeneralStylesControls || (GeneralStylesControls = {}));
var BuiltInControlTypes = {
  [BlockType.BLOCK_BANNER]: BannerControls,
  [BlockType.BLOCK_BUTTON]: ButtonControls,
  [BlockType.BLOCK_TEXT]: TextControls,
  [BlockType.BLOCK_VIDEO]: VideoControls,
  [BlockType.BLOCK_TIMER]: TimerControls,
  [BlockType.BLOCK_SPACER]: SpacerControls,
  [BlockType.BLOCK_IMAGE]: ImageControls,
  [BlockType.BLOCK_HTML]: HTMLControls,
  [BlockType.BLOCK_SOCIAL]: SocialControls,
  [BlockType.BLOCK_MENU]: MenuControls,
  [BlockType.BLOCK_AMP_FORM]: AmpFormControls,
  [BlockType.BLOCK_AMP_ACCORDION]: AccordionControls,
  [BlockType.BLOCK_AMP_CAROUSEL]: CarouselControls,
  [BlockType.STRIPE]: StripeControls,
  [BlockType.STRUCTURE]: StructureControls,
  [BlockType.CONTAINER]: ContainerControls,
  [BlockType.CUSTOM_BLOCK_LINK]: CustomLinkControls,
  [BlockType.CUSTOM_BLOCK_IMAGE]: CustomImageControls,
  [BlockType.CUSTOM_BLOCK_TEXT]: CustomTextControls,
  BANNER_CHILD: BannerChildControls,
  MESSAGE_SETTINGS: MessageSettingsControls,
  GENERAL_STYLES: GeneralStylesControls,
  GENERAL: GeneralControls
};

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/ContextActionType.js
var ContextActionType;
(function(ContextActionType2) {
  ContextActionType2["SAVE_AS_MODULE"] = "saveAsModule";
  ContextActionType2["UPDATE_MODULE"] = "updateModule";
  ContextActionType2["IMPROVE_WITH_AI"] = "improveWithAI";
  ContextActionType2["MOVE"] = "move";
  ContextActionType2["COPY"] = "copy";
  ContextActionType2["REMOVE"] = "remove";
  ContextActionType2["CLEAR_CONTAINER"] = "clearContainer";
  ContextActionType2["REMOVE_CONTAINER"] = "removeContainer";
  ContextActionType2["EXTERNAL_DISPLAY_CONDITION"] = "externalDisplayCondition";
})(ContextActionType || (ContextActionType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/EditorStatePropertyType.js
var EditorStatePropertyType;
(function(EditorStatePropertyType2) {
  EditorStatePropertyType2["previewDeviceMode"] = "previewDeviceMode";
})(EditorStatePropertyType || (EditorStatePropertyType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/PanelPosition.js
var PanelPosition;
(function(PanelPosition2) {
  PanelPosition2["BLOCKS_SETTINGS"] = "BLOCKS_SETTINGS";
  PanelPosition2["SETTINGS_BLOCKS"] = "SETTINGS_BLOCKS";
})(PanelPosition || (PanelPosition = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/Popover.js
var PopoverSide;
(function(PopoverSide2) {
  PopoverSide2["TOP"] = "top";
  PopoverSide2["RIGHT"] = "right";
  PopoverSide2["BOTTOM"] = "bottom";
  PopoverSide2["LEFT"] = "left";
})(PopoverSide || (PopoverSide = {}));
var ExtensionPopoverType;
(function(ExtensionPopoverType2) {
  ExtensionPopoverType2["AI_HIDDEN_PREHEADER"] = "aiHiddenPreheader";
  ExtensionPopoverType2["AI_SUBJECT"] = "aiSubject";
  ExtensionPopoverType2["AI_TEXT"] = "aiText";
})(ExtensionPopoverType || (ExtensionPopoverType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/PreviewDeviceMode.js
var PreviewDeviceMode;
(function(PreviewDeviceMode2) {
  PreviewDeviceMode2["DESKTOP"] = "DESKTOP";
  PreviewDeviceMode2["MOBILE"] = "MOBILE";
})(PreviewDeviceMode || (PreviewDeviceMode = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/SettingsTab.js
var SettingsTab;
(function(SettingsTab2) {
  SettingsTab2["SETTINGS"] = "settings";
  SettingsTab2["STYLES"] = "styles";
  SettingsTab2["DATA"] = "data";
})(SettingsTab || (SettingsTab = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/UIElementsAttributes.js
var UIElementAttributes = {
  name: "name",
  disabled: "disabled"
};
var buttonAttributes = {
  ...UIElementAttributes,
  caption: "caption",
  icon: "icon"
};
var checkBoxAttributes = {
  ...UIElementAttributes,
  caption: "caption"
};
var counterAttributes = {
  ...UIElementAttributes,
  minValue: "min-value",
  maxValue: "max-value",
  step: "step"
};
var datePickerAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder",
  minDate: "min-date"
};
var labelAttributes = {
  ...UIElementAttributes,
  text: "text",
  hint: "hint"
};
var messageAttributes = {
  ...UIElementAttributes,
  type: "type"
};
var radioButtonsAttributes = {
  ...UIElementAttributes,
  buttons: "buttons"
};
var selectAttributes = {
  ...UIElementAttributes,
  searchable: "searchable",
  multiSelect: "multi-select",
  placeholder: "placeholder",
  items: "items"
};
var fontFamilySelectAttributes = {
  ...selectAttributes,
  addCustomFontOption: "add-custom-font-option"
};
var selectItemAttributes = {
  ...UIElementAttributes,
  text: "text",
  value: "value"
};
var checkItemAttributes = {
  ...UIElementAttributes,
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
var checkButtonsAttributes = {
  ...UIElementAttributes,
  buttons: "buttons"
};
var radioItemAttributes = {
  ...UIElementAttributes,
  text: "text",
  hint: "hint",
  icon: "icon",
  value: "value"
};
var textAttributes = {
  ...UIElementAttributes,
  placeholder: "placeholder"
};
var textAreaAttributes = {
  ...UIElementAttributes,
  resizable: "resizable",
  placeholder: "placeholder"
};
var iconAttributes = {
  ...UIElementAttributes,
  img: "img",
  src: "src",
  title: "title",
  width: "width",
  height: "height",
  imageClass: "image-class",
  hint: "hint",
  disabled: "disabled",
  isActive: "is-active",
  visibility: "visibility",
  transform: "transform"
};
var nestedControlAttributes = {
  ...UIElementAttributes,
  controlId: "control-id"
};

// node_modules/@stripoinc/ui-editor-extensions/dist/constants/UIElementType.js
var UIElementType;
(function(UIElementType2) {
  UIElementType2["BUTTON"] = "UE-BUTTON";
  UIElementType2["CHECKBOX"] = "UE-CHECKBOX";
  UIElementType2["CHECK_BUTTONS"] = "UE-CHECK-BUTTONS";
  UIElementType2["COLOR"] = "UE-COLOR";
  UIElementType2["COUNTER"] = "UE-COUNTER";
  UIElementType2["DATEPICKER"] = "UE-DATEPICKER";
  UIElementType2["LABEL"] = "UE-LABEL";
  UIElementType2["MESSAGE"] = "UE-MESSAGE";
  UIElementType2["RADIO_BUTTONS"] = "UE-RADIO-BUTTONS";
  UIElementType2["SELECTPICKER"] = "UE-SELECT";
  UIElementType2["SWITCHER"] = "UE-SWITCHER";
  UIElementType2["TEXT"] = "UE-TEXT";
  UIElementType2["TEXTAREA"] = "UE-TEXTAREA";
  UIElementType2["CHECK_ITEM"] = "UE-CHECK-ITEM";
  UIElementType2["RADIO_ITEM"] = "UE-RADIO-ITEM";
  UIElementType2["SELECT_ITEM"] = "UE-SELECT-ITEM";
  UIElementType2["ICON"] = "UE-ICON";
  UIElementType2["MERGETAGS"] = "UE-MERGETAGS";
  UIElementType2["FONT_FAMILY_SELECT"] = "UE-FONT-FAMILY-SELECT";
  UIElementType2["NESTED_CONTROL"] = "UE-NESTED-CONTROL";
})(UIElementType || (UIElementType = {}));

// node_modules/@stripoinc/ui-editor-extensions/dist/Extension.js
var Extension = class {
  i18n;
  styles;
  previewStyles;
  uiElements = [];
  uiElementTagRegistry;
  controls = [];
  settingsPanelRegistry;
  contextActions = [];
  blocks = [];
  id;
  externalSmartElementsLibrary;
  externalImageLibrary;
  externalAiAssistant;
  externalDisplayConditionsLibrary;
  externalVideoLibrary;
  blocksPanel;
  constructor(i18n, styles, uiElements = [], uiElementTagRegistry, controls = [], settingsPanelRegistry, contextActions = [], blocks = [], externalSmartElementsLibrary, externalImageLibrary, previewStyles, externalAiAssistant, externalDisplayConditionsLibrary, externalVideoLibrary, blocksPanel) {
    this.i18n = i18n;
    this.styles = styles;
    this.previewStyles = previewStyles;
    this.uiElements = uiElements;
    this.uiElementTagRegistry = uiElementTagRegistry;
    this.controls = controls;
    this.settingsPanelRegistry = settingsPanelRegistry;
    this.contextActions = contextActions;
    this.blocks = blocks;
    this.externalSmartElementsLibrary = externalSmartElementsLibrary;
    this.externalImageLibrary = externalImageLibrary;
    this.externalAiAssistant = externalAiAssistant;
    this.externalDisplayConditionsLibrary = externalDisplayConditionsLibrary;
    this.externalVideoLibrary = externalVideoLibrary;
    this.blocksPanel = blocksPanel;
    this.id = Math.random().toString(36).substring(2);
  }
  getI18n() {
    return this.i18n;
  }
  getStyles() {
    return this.styles;
  }
  getPreviewStyles() {
    return this.previewStyles;
  }
  getUiElements() {
    return this.uiElements;
  }
  getUiElementTagRegistry() {
    return this.uiElementTagRegistry;
  }
  getControls() {
    return this.controls;
  }
  getSettingsPanelRegistry() {
    return this.settingsPanelRegistry;
  }
  getContextActions() {
    return this.contextActions;
  }
  getBlocks() {
    return this.blocks;
  }
  getId() {
    return this.id;
  }
  getExternalSmartElementsLibrary() {
    return this.externalSmartElementsLibrary;
  }
  getExternalImageLibrary() {
    return this.externalImageLibrary;
  }
  getExternalAiAssistant() {
    return this.externalAiAssistant;
  }
  getExternalDisplayConditionsLibrary() {
    return this.externalDisplayConditionsLibrary;
  }
  getExternalVideoLibrary() {
    return this.externalVideoLibrary;
  }
  getBlocksPanel() {
    return this.blocksPanel;
  }
};

// node_modules/@stripoinc/ui-editor-extensions/dist/ExtensionBuilder.js
var ExtensionBuilder = class {
  i18n;
  styles;
  previewStyles;
  uiElements = [];
  uiElementTagRegistry;
  controls = [];
  settingsPanelRegistry;
  contextActions = [];
  blocks = [];
  externalSmartElementsLibrary;
  externalImageLibrary;
  externalAiAssistant;
  externalDisplayConditionsLibrary;
  externalVideoLibrary;
  blocksPanel;
  withLocalization(i18n) {
    this.i18n = i18n;
    return this;
  }
  withStyles(styles) {
    this.styles = styles;
    return this;
  }
  /**
   * @description defines custom developer styles to use inside the editor document preview
   */
  withPreviewStyles(styles) {
    this.previewStyles = styles;
    return this;
  }
  addContextAction(contextAction) {
    this.contextActions.push(contextAction);
    return this;
  }
  addUiElement(uiElement) {
    this.uiElements.push(uiElement);
    return this;
  }
  withUiElementTagRegistry(uiElementTagRegistry) {
    this.uiElementTagRegistry = uiElementTagRegistry;
    return this;
  }
  addControl(control) {
    this.controls.push(control);
    return this;
  }
  withSettingsPanelRegistry(settingsPanelRegistry) {
    this.settingsPanelRegistry = settingsPanelRegistry;
    return this;
  }
  withExternalSmartElementsLibrary(externalSmartElementsLibrary) {
    this.externalSmartElementsLibrary = externalSmartElementsLibrary;
    return this;
  }
  withExternalImageLibrary(externalImageLibrary) {
    this.externalImageLibrary = externalImageLibrary;
    return this;
  }
  withExternalAiAssistant(externalAiAssistant) {
    this.externalAiAssistant = externalAiAssistant;
    return this;
  }
  withExternalDisplayCondition(externalDisplayCondition) {
    this.externalDisplayConditionsLibrary = externalDisplayCondition;
    return this;
  }
  withExternalVideosLibrary(externalVideoLibrary) {
    this.externalVideoLibrary = externalVideoLibrary;
    return this;
  }
  withBlocksPanel(blocksPanel) {
    this.blocksPanel = blocksPanel;
    return this;
  }
  addBlock(block) {
    this.blocks.push(block);
    return this;
  }
  build() {
    return new Extension(this.i18n, this.styles, this.uiElements, this.uiElementTagRegistry, this.controls, this.settingsPanelRegistry, this.contextActions, this.blocks, this.externalSmartElementsLibrary, this.externalImageLibrary, this.previewStyles, this.externalAiAssistant, this.externalDisplayConditionsLibrary, this.externalVideoLibrary, this.blocksPanel);
  }
};

// wwwroot/js/hello-extension.js
var helloExtension = new ExtensionBuilder().withName("helloExtension").withLabel("\u{1F44B} Hello Block").withStyles(".hello-block { padding: 12px; background: #E07A5F; color: white; border-radius: 6px; font-family: Arial, sans-serif; }").withInitialData({
  message: "Hello, Stripo! \u{1F44B}"
}).withComponent((data) => {
  const root = document.createElement("div");
  root.className = "hello-block";
  root.textContent = data.message;
  return root;
}).withInspector([
  { type: "text", name: "message", label: "Message" }
]).build();
window.helloExtension = helloExtension;
