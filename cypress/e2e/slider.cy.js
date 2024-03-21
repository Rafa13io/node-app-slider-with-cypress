describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Navigation Test', function () {
  it('Ensures user can navigate slides using navigation buttons', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'London');
    cy.get('.swiper-button-prev').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Rome');
  });
});

describe('Swiper Gallery Slide Description Test', function () {
  it('Verifies that each slide displays the correct title and description', function () {
    cy.visit('http://localhost:3000');
    const slides = [
      { title: 'Rome', description: 'Italy' },
      { title: 'London', description: 'United Kingdom' },
      { title: 'Paris', description: 'France' }
    ];

    slides.forEach((slide, index) => {
      if (index > 0) {
        cy.get('.swiper-button-next').click();
      }
      cy.wait(2000);
      cy.get('.swiper-slide-active').should('contain', slide.title);
      cy.get('.swiper-slide-active').should('contain', slide.description);
    });
  });
});

describe('Swiper Gallery Responsive Test', function () {
  const viewports = [
    { device: 'Desktop', width: 1280, height: 720 },
    { device: 'Tablet', width: 768, height: 1024 },
    { device: 'Mobile', width: 375, height: 667 }
  ];

  viewports.forEach((viewport) => {
    it(`Verifies gallery layout and navigation on ${viewport.device}`, function () {
      cy.viewport(viewport.width, viewport.height);
      cy.visit('http://localhost:3000');
      cy.get('.swiper-slide').should('have.length.greaterThan', 0);
      cy.get('.swiper-button-next').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');
      cy.get('.swiper-button-prev').should('be.visible').click();
      cy.get('.swiper-slide-active').should('exist');
    });
  });
});

describe('Swiper Gallery Display Test', function () {
  it('Verifies that all gallery elements are visible', function () {

    cy.visit('http://localhost:3000');
    cy.get('.swiper').should('be.visible');
    cy.get('.swiper-slide').should('have.length.greaterThan', 2);

    cy.get('.swiper-button-next').should('be.visible').click();
    cy.get('.swiper-slide-active').should('exist');

    cy.get('.swiper-button-prev').should('be.visible').click();
    cy.get('.swiper-slide-active').should('exist');
  });
});