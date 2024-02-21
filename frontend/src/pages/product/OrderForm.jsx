/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import SanityDataContext from "../../context/SanityDataContext";

const OrderForm = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [order, setOrder] = useState({
    _type: "order",
    full_name: "",
    phone_number: "",
    wilaya: {},
    address: "",
    product: {},
    quantity: quantity,
  });
  const createOrder = async (data) => {
    const response = await axios({
      method: "post",
      url: "https://06pfaut4.api.sanity.io/v1/data/mutate/production",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer skGdo9QXTZRxXpMgGbqv2pQqGxQHr8f2hN61GJepSKDaHQ7jZniyiSLNxY7kjaVavpQwOMqTcBDuiTzaTWokgmluWwzp9p2UpCn3PF8BpohjccBaYOMCSSous0UKpMuMUS6NEsV8lMwBCcaP4sJn6wSFtxBaAT847KuTgkU703XjSHzNV4of`,
      },
      data: {
        mutations: [
          {
            create: data,
          },
        ],
      },
    });
    return response.data;
  };

  const mutation = useMutation({
    mutationFn: createOrder,
    onError: (error, variables, context) => {
      // An error happened!
    },
    onSuccess: (data, variables, context) => {},
    onSettled: (data, error, variables, context) => {
      // Error or success... doesn't matter!
    },
  });
  const handleSubmit = (event) => {
    event.preventDefault()
    product && setOrder(prev=>({...prev, product: JSON.parse(product)}))
    setOrder(prev=>({...prev, quantity: quantity}))
    mutation.mutate({ ...order });
  };

  const { platformData } = useContext(SanityDataContext);
  const wilayasData = platformData?.data?.result[0]?.delivery_price;
  useEffect(() => {
    console.log(order);
  }, [order, quantity]);
  return (
    <div className="flex flex-col gap-4 border-[#D9D9D9] bg-[#FBFBFB] my-8  px-8 py-4 border">
      <p>
        للطلب أدخل معلوماتك في الخانات أسفله ???? .. ثم إضغط على زر اطلب الان
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 text-right">
        <Input
          className="text-right placeholder:text-right "
          isRequired
          variant="bordered"
          size="sm"
          type="text"
          label="الإسم الكامـل"
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, full_name: e.target.value }))
          }
        />
        <Input
          isRequired
          variant="bordered"
          size="sm"
          type="number"
          label="رقـم الهاتف"
          onChange={(e) =>
            setOrder((prev) => ({ ...prev, phone_number: e.target.value }))
          }
        />
        <div className="flex gap-3">
          <Input
            isRequired
            variant="bordered"
            size="sm"
            type="text"
            label="العنوان الكـامل"
            onChange={(e) =>
                setOrder((prev) => ({ ...prev, address: e.target.value }))
              }
          />

          <Select
            isRequired
            size="sm"
            label="الولايـة"
            variant="bordered"
            placeholder="اختـر ولايتك"
            className="max-w-xs"
            onChange={(event) => {
              setOrder((prev) => ({
                ...prev,
                wilaya: JSON.parse(event.target.value),
              }));
            }}
          >
            {wilayasData &&
              wilayasData.map((wilaya) => (
                <SelectItem key={JSON.stringify(wilaya)} value={wilaya}>
                  {wilaya.wilaya}
                </SelectItem>
              ))}
          </Select>
        </div>

        <div className="flex justify-end w-full gap-7">
          <Button type="submit" className="w-full font-bold" color="primary">
            اطلـب الان
          </Button>
          <button type="submit" className="w-full font-bold">
            اطلـب الان
          </button>
          <div className="flex gap-3 items-center justify-end font-bold text-lg">
            <button
              className="border rounded-md bg-white px-2"
              type="button"
              onClick={() => {setQuantity((prev) => prev + 1); 
              }}
            >
              +
            </button>
            <span>{quantity}</span>
            <button
              className="border rounded-md bg-white px-2"
              type="button"
              onClick={() => {
                if (quantity > 1) {
                  setQuantity((prev) => prev - 1);
                }
              }}
            >
              -
            </button>
          </div>
        </div>
        <Modal
          className="    "
          isOpen={isOpen}
          placement={"auto"}
          onOpenChange={onOpenChange}
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1"></ModalHeader>
                <ModalBody>
                  <div>
                    <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                      <p className="font-bold">: المنتج</p>
                      <p>DNK Blue Shoes</p>
                    </div>
                    <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                      <p className="font-bold">: الكميـة</p>
                      <p>{quantity}</p>
                    </div>
                    <div className="border-b-2 px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                      <p className="font-bold">: سعر الشحـن</p>
                      <p>600 DA</p>
                    </div>
                    <div className=" px-3 py-5 w-full flex flex-row-reverse justify-between items-center">
                      <p className="font-bold">: السعر الإجمـالي</p>
                      <p>1200 DA</p>
                    </div>
                  </div>
                </ModalBody>
                <ModalFooter>
                  <Button
                    className="font-bold"
                    color="danger"
                    variant="light"
                    onPress={onClose}
                  >
                    إلغـاء
                  </Button>
                  <Button className="font-bold" type="submit" color="primary">
                    تأكيـد الطلبية
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </form>
    </div>
  );
};

export default OrderForm;
