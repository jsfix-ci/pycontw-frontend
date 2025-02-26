<template>
    <div>
        <banner>
            <div class="flex flex-col mt-8">
                <core-h1
                    v-if="!shouldBreak"
                    :title="$t('title')"
                    class="mx-4"
                ></core-h1>
                <core-h1
                    v-if="shouldBreak"
                    :title="$t('titlePart1')"
                    class="mx-4"
                ></core-h1>
                <core-h1
                    v-if="$t('titlePart2') && shouldBreak"
                    :title="$t('titlePart2')"
                    class="mx-4"
                ></core-h1>
            </div>
            <div class="flex flex-col md:grid-cols-2">
                <i18n path="pageAbstract" tag="p" class="md:text-align-center">
                    <template #br><br /></template>
                    <template v-if="shouldBreak" #conditionalBr>
                        <br />
                    </template>
                </i18n>
            </div>
        </banner>

        <i18n-page-wrapper class="px-8 sm:px-10 md:px-32 lg:px-60" custom-x>
            <!-- intro -->
            <div class="pb-8 mt-10 md:mt-0">
                <h2 class="introConferenceStyle">
                    {{ $t('introConference') }}
                </h2>
                <i18n path="conferenceContent" tag="p" class="introContent">
                    <template #br><br /></template>
                </i18n>
            </div>

            <div class="pb-12">
                <h2>{{ $t('introTitle') }}</h2>
                <i18n path="introContent" tag="p" class="introContent">
                    <template #fa>
                        <locale-link
                            to="/registration/financial-aid"
                            underline
                            highlight
                            >{{ $t('fa') }}</locale-link
                        >
                    </template>
                    <template #br><br /></template>
                </i18n>
            </div>

            <!-- ticket plans -->
            <div class="tickets">
                <div
                    v-for="(ticketInfo, index) in ticketInfos"
                    :key="`ticket_info_${index}`"
                    class="ticketContainer"
                >
                    <div class="ticketHeader">
                        <img
                            :src="ticketInfo.image"
                            :alt="ticketInfo.tag"
                            class="icon"
                        />
                        <div class="title" :style="ticketTitleStyle">
                            {{ $t(ticketInfo.titleI18NPath) }}
                        </div>
                    </div>
                    <ul class="features">
                        <li
                            v-for="(feature, i) in ticketInfo.features"
                            :key="`ticket_info_${ticketInfo.tag}_features_${i}`"
                            class="feature"
                        >
                            ✓ {{ $t(`features.${feature}`) }}
                        </li>
                    </ul>
                    <div class="price">
                        <div v-if="ticketInfo.priceOnSale" class="priceOnSale">
                            {{ ticketInfo.priceOnSale }}
                        </div>
                        <div :class="isStrikethrough(!!ticketInfo.priceOnSale)">
                            {{ ticketInfo.price }}
                        </div>
                    </div>
                    <div class="button">
                        <text-button
                            v-if="ticketInfo.link"
                            small
                            :href="ticketInfo.link"
                            >{{ $t('buttonText') }}</text-button
                        >
                        <text-button v-else-if="ticketInfo.hasEnded" small>{{
                            $t('buttonTextSalesEnded')
                        }}</text-button>
                        <text-button v-else small>{{
                            $t('buttonTextNotStarted')
                        }}</text-button>
                    </div>
                </div>
            </div>
            <!-- Sponsor pass content-->
            <div class="pb-12">
                <h2 id="introSponsor">{{ $t('introSponsor') }}</h2>
                <i18n path="SponsorContent" tag="p" class="SponsorContent">
                    <template #br><br /></template>
                </i18n>
            </div>
        </i18n-page-wrapper>
    </div>
</template>

<script>
import i18n from '@/i18n/registration/tickets.i18n'

import I18nPageWrapper from '@/components/core/i18n/PageWrapper'
import CoreH1 from '@/components/core/titles/H1'
import Banner from '@/components/core/layout/Banner'
import { LocaleLink } from '@/components/core/links'
import TextButton from '@/components/core/buttons/TextButton'

export default {
    i18n,
    name: 'PageRegistrationConferenceTickets',
    components: {
        CoreH1,
        I18nPageWrapper,
        Banner,
        LocaleLink,
        TextButton,
    },
    data() {
        return {
            ticketsBanner: require('~/static/img/about/Banner.svg'),
            ticketInfos: [
                {
                    tag: 'earlyBird',
                    titleI18NPath: 'ticketEarlyBird',
                    priceOnSale: 'NT$ 1,690',
                    price: 'NT$ 2,600',
                    image: require('~/static/img/registration/tickets/earlyBird_disabled.svg'),

                    // The strings in this array are the tags listed in `features` object
                    // of i18n file (~i18n/registration/tickets.i18n.js).
                    features: [
                        'onSales',
                        'limited100',
                        'pyckage',
                        'conference',
                    ],
                    hasEnded: true,
                    link: null,
                },
                {
                    tag: 'regular',
                    titleI18NPath: 'ticketRegular',
                    price: 'NT$ 2,600',
                    image: require('~/static/img/registration/tickets/regular_disabled.svg'),
                    features: ['pyckage', 'conference'],
                    link: null,
                    hasEnded: true,
                },
                {
                    tag: 'sponsorship',
                    titleI18NPath: 'ticketSponsorship',
                    price: 'NT$ 5,000',
                    image: require('~/static/img/registration/tickets/sponsor_disabled.svg'),
                    features: ['SpecialSouvenir', 'pyckage', 'conference'],
                    link: null,
                    hasEnded: true,
                },
                {
                    tag: 'latebird',
                    titleI18NPath: 'ticketLateBird',
                    price: 'NT$ 3,600',
                    image: require('~/static/img/registration/tickets/lateBird_disabled.svg'),
                    features: ['conference'],
                    link: null,
                    hasEnded: true,
                },
                {
                    tag: 'enterprise',
                    titleI18NPath: 'ticketEnterprise',
                    price: 'NT$ 3,600',
                    image: require('~/static/img/registration/tickets/corporate_disabled.svg'),
                    features: ['vatAvailable', 'pyckage', 'conference'],
                    link: null,
                    hasEnded: true,
                },
            ],
        }
    },
    computed: {
        bannerStyle() {
            return {
                'background-image': `url(${this.ticketsBanner})`,
                'background-repeat': 'no-repeat',
                'background-position': 'center',
            }
        },
        ticketTitleStyle() {
            return {
                'font-size': this.$i18n.locale === 'en-us' ? '22px' : '32px',
            }
        },
        shouldBreak() {
            if (process.client) {
                const width = window.innerWidth
                if (width < 768) {
                    return true
                }
            }
            return false
        },
    },
    methods: {
        isStrikethrough(indicator) {
            return indicator ? { 'line-through': true } : {}
        },
    },
    head() {
        return {
            title: this.$i18n.t('og.title'),
            meta: [
                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: this.$i18n.t('og.title'),
                },
                {
                    hid: 'og:description',
                    property: 'og:description',
                    content: this.$i18n.t('pageAbstract'),
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: this.$i18n.t('pageAbstract'),
                },
            ],
        }
    },
}
</script>

<style lang="postcss" scoped>
.titleStyle {
    @apply flex flex-row md:flex-col;
}
.pageAbstract {
    @apply md:text-right;
}
.conferenceContent {
    @apply leading-5;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.introConferenceStyle {
    margin-top: -50px;
}

.introContent {
    @apply leading-5;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.tickets {
    @apply w-full;
}

.ticketContainer {
    @apply flex flex-col xl:flex-row justify-around;
    @apply py-10 xl:py-8;
}

.ticketContainer .ticketHeader {
    @apply m-auto;
    padding: 0 0 24px;
    @media (min-width: 1440px) {
        padding: 0;
    }
}
.ticketContainer .icon {
    @apply w-20 mx-auto;
    padding: 0 0 12px;
}
.ticketContainer .title {
    @apply font-serif font-semibold text-center;
    min-width: 190px;
    @media (max-width: 1440px) {
        font-size: 24px;
    }
}

.ticketContainer .features {
    @apply flex flex-col justify-center mx-auto;
    margin-bottom: 0 !important;
    padding: 0 0 24px;
    min-width: 0;
    @media (min-width: 1440px) {
        min-width: 240px;
        padding: 0;
    }
}
.ticketContainer .feature {
    @apply font-sans;
    font-size: 16px;
    @media (min-width: 1440px) {
        font-size: 18px;
    }
}

.ticketContainer .price {
    @apply flex flex-row-reverse xl:flex-col;
    @apply text-center m-auto;
    padding: 0 0 24px;
    font-size: 22px;
    @media (min-width: 1440px) {
        padding: 0;
        font-size: 28px;
    }
}
.ticketContainer .priceOnSale {
    @apply font-bold text-center mx-1.5 my-auto text-pink-700;
}

.ticketContainer .button {
    @apply flex items-center mx-auto;
}

h2 {
    @apply font-serif font-bold text-center;
    @apply pb-4 pt-0 xl:pb-10 xl:pt-4;
    @apply mt-0 mb-2 tracking-widest text-pink-700;
    font-size: 28px;

    @media (min-width: 1440px) {
        font-size: 32px;
    }
}
</style>
