'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { serviceOptions } from '@/lib/services';

interface EstimateModalContextType {
  isOpen: boolean;
  selectedService: string;
  openEstimateModal: (serviceName?: string) => void;
  closeEstimateModal: () => void;
}

const EstimateModalContext = createContext<EstimateModalContextType | undefined>(undefined);

export function EstimateModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const defaultService = serviceOptions[0]?.name ?? '';
  const [selectedService, setSelectedService] = useState(defaultService);

  const openEstimateModal = (serviceName?: string) => {
    if (serviceName) {
      setSelectedService(
        serviceOptions.some((service) => service.name === serviceName)
          ? serviceName
          : defaultService,
      );
    }
    setIsOpen(true);
  };

  const closeEstimateModal = () => {
    setIsOpen(false);
  };

  return (
    <EstimateModalContext.Provider
      value={{ isOpen, selectedService, openEstimateModal, closeEstimateModal }}
    >
      {children}
    </EstimateModalContext.Provider>
  );
}

export function useEstimateModal() {
  const context = useContext(EstimateModalContext);
  if (!context) {
    throw new Error('useEstimateModal must be used within an EstimateModalProvider');
  }
  return context;
}
