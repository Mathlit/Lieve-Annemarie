<template>
    <LandingNavbar></LandingNavbar>
    <slot></slot>
    <!-- <LandingFooter></LandingFooter> -->

    <div class="flex justify-center items-center mt-16 mb-8">
        <NuxtImg
            src="/img/footer.png"
            alt="Annemarie"
            loading="lazy"
            format="avif"
            width="450"
            height="136"
        />
    </div>

    <!-- <LandingContainer>
        <div class="flex justify-center items-center mt-16 mb-8">
            <NuxtLink
                href="/privacy"
                class="flex text-md pt-1 text-gray-800 hover:text-gray-900"
            >
                Privacy
            </NuxtLink>
        </div>
    </LandingContainer> -->
</template>
